total_list = []

while True:
    question = input("질문을 입력해주세요 : ")
    if question == "q":
        break
    else:
        total_list.append({"질문" : question, "답변" : ""})

for question in total_list:
    print(question["질문"])
    answer = input("답변을 입력해주세요 : ")
    question["답변"] = answer
print(total_list)