
# Check if number is equal to sum of all its digits raised to the number of digits
def narcissistic( value ):
  sum = 0
  is_narcissistic = False
  numString = str(value)
  size = len(numString)
  for character in numString:
    sum += int(character) ** size
  if(sum == value):
    is_narcissistic = True
  return is_narcissistic