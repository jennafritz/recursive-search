def recursive_search(arr, target)
  # type your code in here

  if arr.length < 1
    return false
  end

  if arr[0] === target
    return true
  end

  return recursive_search(arr.slice(1, arr.length), target)
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", recursive_search([1, 2, 3], 2)

  puts "Expecting: true"
  puts "=>", recursive_search([8, 27, 103], 103)

  puts "Expecting: false"
  puts "=>", recursive_search([12, 86, 413], 2)

  puts "Expecting: false"
  puts "=>", recursive_search([3, 2, 1], 4)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
  # until the target is found or array is empty
  # check if the first element of the array is equal to the target
  # if so, return true
  # if not, slice the first element off of the array
  # call the recursive function with the sliced array


# And a written explanation of your solution
  # we first check the two base cases:
    # if the length of the array is less than 1 (since we're using a slicing approach)
    # or if the target is equal to the value of the first element in the array
  # if neither of those are true, we run the function again
  # this time, with a sliced version of the array which removes the first element
