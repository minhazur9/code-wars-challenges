
# Returns how many different combinations of numbers from one number from each array without duplicates
def solve(arr):
    unique = []
    solution = 1
    for subarr in arr:
        for num in subarr:
            if num not in unique:
                unique.append(num)
        solution *= len(unique)
        unique = []
    return solution