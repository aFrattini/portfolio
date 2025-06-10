def data_to_predict(pclass, age, sib, parch, sex):
    return [[
        pclass,
        age,
        sib,
        parch,
        1 if sex == "female" else 0,
        1 if sex == "male" else 0
    ]]
