
-- marvel seeds 
INSERT INTO department (dep_name)
VALUES ("Student"), ("Asgard"), ("Engineering"), ("Leader"), ("Stealth");

INSERT INTO roles (title, salary, department_id)
VALUE ("Superhero", 25000.00, 1), ("God", 600000.00, 2), ("Engineer", 600000.00, 3), ("Captain", 200000.00, 4), ("Assassin", 800000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Peter", "Parker", 1, 0), ("Thor", "God of Thunder", 2, 1), ("Tony", "Stark", 3, 1), ("Steve", "Rogers", 4, 1), ("Natasha", "Romanova", 5, 0);