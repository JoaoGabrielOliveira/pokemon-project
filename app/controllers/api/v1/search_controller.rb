class Api::V1::SearchController < ApplicationController
    def index
        @queryNames = Pokemon.where('name LIKE ?', "%#{params[:q]}%")
    end
end
