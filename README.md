# listDorama
It is a simple watched Doramas manager 


**#POST: /dorama**
#Body: { "name": "Nosso verão", "overview": "descrição legal",  "grade": 5 }
#A nota deve estar entre 1 e 5. 

**#GET: /dorama**
#Retorna a lista de doramas inseridos.

**#DELETE: /dorama/drop**
#Body: {"id": 1, "name": "Nosso verão"}

**#PATCH: /dorama/update**
#atualiza a nota do dorama. 
#Body: {"id": 1, "grade": 4}

**#GET: /dorama/dashboard**
#retorna a quantidade de doramas vistos por nota. 
