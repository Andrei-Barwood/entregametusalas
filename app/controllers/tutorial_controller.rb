# frozen_string_literal: true

require_relative 'application_controller'

class ApplicationController < Sinatra::Base
  get '/tutorial' do
    @episodes = Episode.all
    @acts = Episode.acts_summary
    @metrics = Episode.global_metrics
    @nodes = TelemetryNode.all
    @initial_episode = @episodes.first
    erb :index
  end

  get '/landing' do
    @episodes = Episode.all
    @acts = Episode.acts_summary
    @metrics = Episode.global_metrics
    @nodes = TelemetryNode.all
    @initial_episode = @episodes.first
    erb :index
  end

  get '/guia' do
    @episodes = Episode.all
    @acts = Episode.acts_summary
    @metrics = Episode.global_metrics
    @nodes = TelemetryNode.all
    @initial_episode = @episodes.first
    erb :index
  end
end
