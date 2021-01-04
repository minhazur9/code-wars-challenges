
# Returns score from the array of numbers if it were played in a game of greed
def score(dice):
    score = 0
    dice_set = set(dice)
    for num in dice_set:
        count = dice.count(num)
        if(count >= 3):
            if num == 1:
                score += 1000 + (count - 3)*100
            elif num == 5:
                score += 500 + (count - 3)*50
            else:
                score += num*100
        else:
            if(num == 1):
                score += count*100
            elif(num == 5):
                score += count*50
    return score