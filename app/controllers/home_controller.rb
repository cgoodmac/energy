class HomeController < ApplicationController
  def index

  end

  def data
    #not actually buildings, but zips

    # Building.delete_all

    # data = HTTParty.get('http://data.cityofnewyork.us/api/views/74cu-ncm4/rows.json')
    # json = JSON(data.body)
    # building_array = json["data"]

    # building_array.each do |b|
    #   if b[8][0]
    #     zip = b[8][0].slice(-7 .. -3).to_i
    #   else
    #   end 

    #   lat = b[8][1].to_f
    #   long = b[8][2].to_f
    #   kwh = b[10].to_i

    #   s1 = Building.where(:zip => zip).first
    #   if s1
    #     s1.kwh = s1.kwh + kwh
    #     s1.save
    #   else
    #     b1 = Building.create(:zip => zip, :lat => lat, :long => long, :kwh => kwh)
    #   end

    # end

    zips = Building.all

    render :json => zips

  end
end