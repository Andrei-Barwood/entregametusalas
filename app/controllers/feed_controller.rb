# frozen_string_literal: true

require_relative 'application_controller'
require_relative '../models/wall_post'

class ApplicationController < Sinatra::Base
  namespace '/api/feed' do
    # Obtener publicaciones del muro social (opcionalmente filtradas por episodio)
    get do
      episode_param = params[:episode_id]
      limit = params[:limit] ? params[:limit].to_i : 100
      posts = WallPost.all(episode_id: episode_param, limit: limit)

      json_response({
        status: 'ok',
        total_posts: posts.size,
        storage_stats: WallPost.storage_stats,
        posts: posts.map(&:to_h)
      })
    end

    # Estadísticas de almacenamiento ultracompacto (JSONL)
    get '/stats' do
      json_response({
        status: 'ok',
        storage_stats: WallPost.storage_stats
      })
    end

    # Crear una nueva publicación en el muro sin login ni autenticación
    post do
      payload = parse_request_body

      author = payload['author'] || payload[:author] ||
               payload['usuario'] || payload[:usuario] ||
               payload['user'] || payload[:user] ||
               payload['cadete'] || payload[:cadete] ||
               'Cadete_NetAcad'

      content = payload['content'] || payload[:content] ||
                payload['comment'] || payload[:comment] ||
                payload['comentario'] || payload[:comentario] ||
                payload['message'] || payload[:message] ||
                payload['text'] || payload[:text] ||
                payload['texto'] || payload[:texto]

      episode_id = payload['episode_id'] || payload[:episode_id] ||
                   payload['episodio'] || payload[:episodio]

      avatar_color = payload['avatar_color'] || payload[:avatar_color]

      begin
        new_post = WallPost.create(
          author: author,
          content: content,
          episode_id: episode_id,
          avatar_color: avatar_color
        )

        status 201
        json_response({
          status: 'created',
          message: 'Publicación agregada al muro clínico con éxito',
          post: new_post.to_h,
          storage_stats: WallPost.storage_stats
        }, 201)
      rescue ArgumentError => e
        status 422
        json_response({
          status: 'error',
          error: e.message
        }, 422)
      rescue StandardError => e
        status 500
        json_response({
          status: 'error',
          error: "Error interno del servidor: #{e.message}"
        }, 500)
      end
    end

    # Reaccionar a una publicación: like (👍), dislike (👎), love (💝)
    post '/:id/react' do
      post_id = params[:id]
      payload = parse_request_body

      reaction_type = payload['type'] || payload[:type] ||
                      payload['reaction'] || payload[:reaction] ||
                      payload['reaccion'] || payload[:reaccion]

      begin
        updated_post = WallPost.react(post_id, reaction_type)
        if updated_post.nil?
          halt 404, json_response({ status: 'error', error: "Publicación con ID '#{post_id}' no encontrada" }, 404)
        end

        json_response({
          status: 'ok',
          id: updated_post.id,
          reaction: reaction_type,
          likes: updated_post.likes,
          dislikes: updated_post.dislikes,
          loves: updated_post.loves,
          post: updated_post.to_h
        })
      rescue ArgumentError => e
        halt 400, json_response({ status: 'error', error: e.message }, 400)
      rescue StandardError => e
        halt 500, json_response({ status: 'error', error: "Error al registrar reacción: #{e.message}" }, 500)
      end
    end
  end

  # Vistas completas del Muro Social Clínico (Twitter-style global feed)
  get '/muro' do
    @episodes = Episode.all
    @nodes = TelemetryNode.all
    @posts = WallPost.all
    @stats = WallPost.storage_stats
    erb :feed
  end

  post '/muro' do
    payload = parse_request_body
    author = payload['author'] || payload[:author] || 'Cadete_NetAcad'
    content = payload['content'] || payload[:content] || payload['comment'] || payload[:comment] || payload['comentario'] || payload[:comentario]
    episode_id = payload['episode_id'] || payload[:episode_id]

    begin
      WallPost.create(author: author, content: content, episode_id: episode_id)
      redirect '/muro'
    rescue ArgumentError => e
      @episodes = Episode.all
      @nodes = TelemetryNode.all
      @posts = WallPost.all
      @stats = WallPost.storage_stats
      @error = e.message
      erb :feed
    end
  end

  get '/feed' do
    redirect '/muro'
  end

  # Versión Móvil Exclusiva: solo interfaz de lectura y publicación del feed (sin consola de escritorio)
  get '/mobile' do
    @episodes = Episode.all
    @posts = WallPost.all
    @stats = WallPost.storage_stats
    erb :mobile_feed, layout: false
  end

  get '/m' do
    redirect '/mobile'
  end

  post '/mobile' do
    payload = parse_request_body
    author = payload['author'] || payload[:author] || 'Cadete_NetAcad'
    content = payload['content'] || payload[:content] || payload['comment'] || payload[:comment] || payload['comentario'] || payload[:comentario]
    episode_id = payload['episode_id'] || payload[:episode_id]

    begin
      WallPost.create(author: author, content: content, episode_id: episode_id)
      redirect '/mobile'
    rescue ArgumentError => e
      @episodes = Episode.all
      @posts = WallPost.all
      @stats = WallPost.storage_stats
      @error = e.message
      erb :mobile_feed, layout: false
    end
  end
end
