adjective = "Big Bad"
hw = "hello world".upcase


p "Hello #{adjective} World "
p hw 

#-----------Nums Array and Enumerables-----------------

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

p nums.uniq 
#to print the array with all duplicate entries removed
#[5, 6, 7, 2, 4, 3, 1, 9, 0, 35, 19, 66, 22, 21, 12, 15]

p nums.push(5)
p nums.pop(1) #remove the last element of the given array and returns the removed elements.
p nums.shift() #removes the first numer in the array
p nums.unshift() #returns the shifted array
p nums.length

p nums.include? 8 #to check if the array contains the number 8

#find_all >>     (1..10).find_all { |i|  i % 3 == 0 }
p nums.find_all {|i| i > 10}

p nums.all? {|i| i > 10}   #boolean

p nums.any? {|i| i > 8 == 0 }   #boolean

p nums.count {|n| n > 4}  #shows how many numbers are > than 4


p nums.each_with_index {|object, index| p object * index} #print each item by its index so, 5times0, 6times1, 7times2

p nums.find {|i| i % 7 == 0 && i % 5 == 0 && i > 0}    #.find the number that is divisible by 7 and 5 and is greater than 0


p nums.find_index {|i| i % 7 == 0 && i % 5 == 0 && i > 0}  #the number that is divisible by 5 and 7 and is greater than 0

p nums.first(3) #returns first 3 numbers.

p nums.last(5) #returns last 5 numbers.

p nums.group_by {|i| i %3}

p nums.minmax #retuns smallest and largest

p nums.reject {|i| i % 3 == 0}  # returns number that is not divisible by 3.

p nums.select {|i| i % 5 == 0}



#####----------------------------------COLOR ARRAY

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

p colors.sample #prints randomly from array

p colors.reverse #prints array in reverse order

p colors.map(&:upcase)


##----------METHODS

def find_area height, width
    height * width
end
p find_area(10,10)


nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

def multiply_each_by_five arr
    arr.map {|i| i * 5}
end
p multiply_each_by_five(nums)


##------------methods with a hash

book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

def print_price hash
    hash[:price]
end
p print_price(book)
p print_price(lamp)
p print_price(table)

def print_item_sums hash, hash2
    hash[:price] + hash2[:price]
end
p print_item_sums(book, lamp)


#--------euler problem 1

p (1...1000).find_all {|i| i % 3 == 0 || i % 5 == 0}.inject(:+)

#---------------------prime
require "prime"

def check_prime? number
    Prime.prime?(number)
end

p check_prime?(3)
p check_prime?(2)
p check_prime?(8)
p check_prime?(13)


def get_prime num
    Prime.each(num) do |pr|
        p pr
    end
end

p get_prime(1000)

































