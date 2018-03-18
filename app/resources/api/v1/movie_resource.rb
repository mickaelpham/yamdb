# frozen_string_literal: true

class API::V1::MovieResource < JSONAPI::Resource
  attributes :title, :original_title, :synopsis
end
