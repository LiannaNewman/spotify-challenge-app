class PeopleController < ApplicationController
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
end
