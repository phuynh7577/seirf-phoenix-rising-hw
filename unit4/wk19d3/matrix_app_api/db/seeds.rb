# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Character.create([
	{ name: "Neo", descriptions: "born as Thomas A. Anderson, also known as The One" },
	{ name: "Trinity", descriptions: "Trinity is a computer programmer and a hacker who has escaped from the Matrix"},
	{ name: "Morpheus", descriptions: "Morpheus is the captain of the Nebuchadnezzar, which is a hovercraft of the human forces of the last human city, Zion" },
	{ name: "Agent Smith", descriptions: "Smith began as an Agent, an AI program in the Matrix programmed to keep order within the system by terminating human simulacra" },
])

Vehicle.create([
	{name: "Nebuchadnezzar", style: "Spaceship"}
])

