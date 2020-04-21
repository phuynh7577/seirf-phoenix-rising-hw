#-----------------------DECK & SHUFFLE
class Card
    attr_reader :suit, :value

    def initialize suit, value
        @suit = suit
        @value = value
    end
end

suits = %w(spades clubs hearts diamonds)
deck = []

suits.each do |suit|
    for i in  1...14
      case i
      when 11
        value = 10
      when 12
        value = 10
      when 13
        value = 10
      when 1
        value = 11
      else
        value = i
      end
        deck.push(Card.new(suit, value))
      end
      deck.shuffle!
    end
    
p deck


#------------player/house

class Player
    attr_accessor :name, :bank, :hand

    def initialize name, bank = 100
        @name = name
        @bank = bank
        @hand = []
    end
    def hand_sum
        hand.reduce(0){|sum, c| sum + c.value}
    end
end

#--------------------------CONSOLE game
p "ENTER NAME"
name = gets.chomp

player = Player.new name, 100

house = Player.new "Dealer", 10000
p house

p "Welcome " + player.name + "! Lets play some Blackjack!!"
p "You currently have $#{player.bank} to play with. Every round is worth $10."
p "Lets get Started."

#-----------------starting game

loop do 
    p "deal or quit?"
    input = gets.chomp

    if input == "deal"
        player.hand = deck.pop(2)
        house.hand = deck.pop(2)
        p "#{player.name}'s hand: #{player.hand_sum}"
        p "#{house.name}'s hand: #{house.hand_sum}"
        
        if player.hand_sum == house.hand_sum
            p 'it is a tie!'
            p "#{player.name} has $#{player.bank}"
            p "#{house.name} has $#{house.bank}"
          
        elsif player.hand_sum == 21
            p 'Blackjack!'
            player.bank += 10
            house.bank -= 10
            p "#{player.name} wins this hand"
            p "#{player.name} has $#{player.bank}"
            p "#{house.name} $#{house.bank}"
          
        elsif
          house.hand_sum == 21
            p 'Blackjack!'
            player.bank -= 10
            house.bank += 10
            p "#{house.name} wins this hand"
            p "#{player.name} has $#{player.bank}"
            p "House has $#{house.bank}"
            
          elsif (player.hand_sum > house.hand_sum)
            player.bank += 10
            house.bank -= 10
            p "#{player.name} wins this hand"
            p "#{player.name} has $#{player.bank}"
            p "#{house.name} has $#{house.bank}"
          
          else 
            p "#{house.name} wins this hand"
            player.bank -= 10
            house.bank += 10
            p "#{player.name} has $#{player.bank}"
            p "#{house.name} has $#{house.bank}"
          end
        elsif input == 'q'
          puts 'Thank you for playing'
          break
        else 
          p 'oops something went wrong'
          break
        end
        p deck.length



end



































