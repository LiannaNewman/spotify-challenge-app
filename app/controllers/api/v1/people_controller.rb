module API
  module V1
    class PeopleController < ApplicationController
       skip_before_filter :verify_authenticity_token
       def index
         @people = Person.all
       end

       def create
         @person = Person.create(
           name: params[:name],
           favoriteCity: params[:favoriteCity]
         )
       end

       def new
       end

       def show
         @person = Person.find_by(id: params[:id])
       end

       def edit
       end

       def update
         @person = Person.find_by(id: params[:id])
         @person.update(
           name: params[:name],
           favoriteCity: params[:favoriteCity]
         )
       end

       def destroy
         @person = Person.find_by(id: params[:id])
         @person.destroy
       end
    end
  end
end
