user_details=[
               {'name':'chrish',
                'email':'chrish@gmail.com',
                'password':'chrish123',
                'hobbies':['pubg','cricket','football'],
                'friends_list':['ram','vikash','sham']},
                {'name':'vikash',
                'email':'vikash@gmail.com',
                'password':'vikash123',
                'hobbies':['pubg','kabadi','football'],
                'friends_list':['ram','chrish','sham']},
                {'name':'ram',
                'email':'ram@gmail.com',
                'password':'ram123123',
                'hobbies':['vollyball','kabadi','football'],
                'friends_list':['sudhan','vikash','aravinth']},
                {'name':'suresh',
                'email':'suresh@gmail.com',
                'password':'suresh123',
                'hobbies':['running','reading','football'],
                'friends_list':['ram','vijay','ajith']},
                {'name':'anandh',
                'email':'anandh@gmail.com',
                'password':'anandh123',
                'hobbies':['tennish','swimming','football'],
                'friends_list':['ram','dhanush','nandhu']}
]
email=input('enter the email:')
password=input('enter the password')
# user_details.update({'login':'true'})
def login():
 for list in user_details:
    if list('email')==email and list('password')==password:
        print("login successfull",'you are friends',(list['friends_list']),'you are hobbbies,'(list['hobbies']))
    else:
        print('invalid user')
login()