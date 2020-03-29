
{ *email: 'warrickdawson25@gmail.com',
  *firstName: 'moral',
  *lastName: 'jera',
  *contact: '6949565968',
  #pioneerRefs: 'fkdjfjk3',
  -options: 'Zambia',
  -city: 'city',
  -dob: '2018-12-05T13:04:16.849Z',
  -sex: 'male',
  *password: 'rocky',
  *confirmPassword: '1' }

CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    email varchar(255) NOT NULL UNIQUE,
    first_name varchar(22) NOT NULL,
    last_name varchar(22) NOT NULL,
    hashed_password varchar(225) NOT NULL,
    contact varchar(14) NOT NULL,
    ref_number varchar(20) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);          

CREATE TABLE IF NOT EXISTS personal_info(
    id serial PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    contact varchar(255) NOT NULL,
    date_of_birth date NOT NULL,
    sex varchar(255) NOT NULL,
    city varchar(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
); 


CREATE TABLE IF NOT EXISTS account_info(
    id serial PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    account_name varchar(255) NOT NULL,
    account_number varchar(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


CREATE TABLE IF NOT EXISTS memeber(
    id serial PRIMARY KEY,
    pioneerRefs varchar(255) NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    memeber_id INT REFERENCES users(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
); 


CREATE TABLE IF NOT EXISTS roles(
    id serial PRIMARY KEY,
    user_role varchar(255) NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
); 


CREATE TABLE IF NOT EXISTS receipts(
    id serial PRIMARY KEY,
    image_url varchar(255) NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    stage INT NOT NULL,
    active BOOLEAN NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);



DELETE FROM roles
where roles.user_id = 2;

DELETE FROM memeber
where user_id = 28;

update receipts
  set active = true  
where receipts.user_id =  6;


update receipts
  set active = true

where receipts.user_id = 2;
    UPDATE receipts
    SET stage = $1, active = $2 WHERE user_id = $3       

DELETE FROM receipts


INSERT INTO memeber (email , pioneerRefs , user_id)
VALUES ('storage services' , '085704553' , 1);


 customers.email from customer_purchases
  inner join  customers on customer_purchases.customer_id = customers.id


CREATE TABLE IF NOT EXISTS registered_users(
    id serial PRIMARY KEY,
    pioneerRefs varchar(255) UNIQUE,
    user_id INT REFERENCES user(id) NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
                                                                                                                                                              
