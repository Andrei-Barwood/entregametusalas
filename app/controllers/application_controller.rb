# frozen_string_literal: true

require 'sinatra/base'
require 'sinatra/namespace'
require 'json'
require_relative '../models/episode'
require_relative '../models/telemetry_node'
require_relative '../models/wall_post'
require_relative '../services/blades_scanner_service'
require_relative '../services/nanomed_inoculator_service'
require_relative '../services/forensic_report_generator'
require_relative '../services/aegis9_sentinel_service'

class ApplicationController < Sinatra::Base
  register Sinatra::Namespace

  configure do
    set :root, File.expand_path('../..', __dir__)
    set :views, File.expand_path('../views', __dir__)
    set :public_folder, File.expand_path('../../public', __dir__)
    set :protection, except: [:frame_options]
  end

  before do
    headers 'X-Cyberia-SOC-Version' => '19.96-BLADES',
            'X-Medical-Protocol-Engine' => 'HL7-FHIR-DICOM-IEEE11073-ACTIVE',
            'X-Aegis9-Sentinel-Binary' => Aegis9SentinelService::BINARY_PATH

    # Restricción Móvil: Los dispositivos móviles abren exclusivamente el feed clínico (salvo si fuerzan ?desktop=1)
    if mobile_device? && request.get? && !request.xhr? &&
       !request.path_info.start_with?('/api') &&
       !request.path_info.start_with?('/css') &&
       !request.path_info.start_with?('/js') &&
       !request.path_info.start_with?('/reports')
      if params[:desktop] == '1'
        response.set_cookie('force_desktop', value: '1', path: '/', max_age: '86400')
      elsif request.cookies['force_desktop'] != '1' &&
            !request.path_info.start_with?('/mobile') &&
            !request.path_info.start_with?('/m')
        redirect '/mobile'
      end
    end
  end

  helpers do
    def json_response(data, status_code = 200)
      content_type :json
      status status_code
      JSON.pretty_generate(data)
    end

    def parse_request_body
      raw = begin
        request.body.rewind if request.body.respond_to?(:rewind)
        request.body.read.to_s
      rescue StandardError
        ''
      end

      json_data = begin
        (raw.nil? || raw.strip.empty?) ? {} : JSON.parse(raw)
      rescue StandardError
        {}
      end

      params.merge(json_data)
    end

    def mobile_device?
      return true if ENV['CYBERIA_FORCE_MOBILE'] == '1' || params[:mobile] == '1' || request.cookies['force_mobile'] == '1'

      user_agent = request.user_agent.to_s
      user_agent =~ /Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Android/i
    end
  end
end
