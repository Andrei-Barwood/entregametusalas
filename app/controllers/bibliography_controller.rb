# frozen_string_literal: true

require_relative 'application_controller'

class ApplicationController < Sinatra::Base
  get '/bibliografia' do
    @episodes = Episode.all
    @nodes = TelemetryNode.all
    @metrics = Episode.global_metrics
    erb :bibliography
  end

  get '/bibliography' do
    redirect '/bibliografia'
  end

  get '/creditos' do
    redirect '/bibliografia'
  end
end
