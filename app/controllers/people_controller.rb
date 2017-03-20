class PeopleController < ApplicationController

  def index
    @people = Person.all
  end

  def create
    @person = Person.create(
      name: params[:name],
      favoriteCity: params[:favoriteCity]
    )
    redirect_to '/people', success: 'Person Successfully Added!'
  end

  def new
  end

  def show
    @person = Person.find_by(id: params[:id])
  end

  def edit
    @person = Person.find_by(id: params[:id])
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
    redirect_to "/people"
  end
end
