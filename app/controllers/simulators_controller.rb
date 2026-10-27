# frozen_string_literal: true

require_relative 'application_controller'

class ApplicationController < Sinatra::Base
  get '/simulators' do
    @episodes = Episode.all
    @nodes = TelemetryNode.all
    erb :simulators
  end

  namespace '/api' do
    post '/blades/mri-scan' do
      payload = parse_request_body
      result = BladesScannerService.execute_scan(payload)
      json_response(result)
    end

    post '/medsec/inoculate' do
      payload = parse_request_body
      result = NanomedInoculatorService.synthesize_and_inoculate(payload)
      json_response(result)
    end
  end
end
