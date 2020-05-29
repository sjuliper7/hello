# hello
Hello is simple project using moleculer js


## Run application
```
npm run dev
```

## Description
Is simple Create Read Update and Delete/ `CRUD` form table todo list

### Table
```mysql
create table todos
(
    id          int auto_increment
        primary key,
    name        varchar(255) null,
    description text         null
);

INSERT INTO moleculer.todos (id, name, description) VALUES (1, 'Improve pace for code ', 'must have improvemnt for pace coding');
INSERT INTO moleculer.todos (id, name, description) VALUES (2, 'Improve pace for code 2', 'must have improvement for pace coding');
```

Will Update soon as possible
