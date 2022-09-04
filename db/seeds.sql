
-- marvel seeds 
INSERT INTO department (dep_name)
VALUES ("Student"), ("Asgard"), ("Engineering"), ("Leader"), ("Stealth");

INSERT INTO roles (title, salary, department_id)
VALUE ("Superhero", 25000.00, 2), ("God", 600000.00, 3), ("Engineer", 600000.00, 4), ("Captain", 200000.00, 1), ("Assassin", 800000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Peter", "Parker", 1, 3), ("Thor", "God of Thunder", 1, 1), ("Tony", "Stark", 3, 2), ("Steve", "Rogers", 5, 2), ("Natasha", "Romanova", 5, 2);