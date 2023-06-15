# User
create table Users
(id int primary key,
username varchar(100),
CompanyID varchar(20),
CompanyName varchar(100),
usertype varchar(20))
 
insert into Users values(10,'Jeff','abc1','abc','admin')
 
insert into Users values(20,'John','xyz1','xyz','user')
 
select * from Users

# Login

create table Login
(
username varchar(100) primary key,
passcode varchar(20))
 
insert into Login values('admin','12345')
 
insert into Login values('chandu','qwerty')
 
select * from Login