class MetaController < ApplicationController

    def about
        render json: { author: "Phi Huynh", last_updated: "29 April 2020" }
    end

end