-- Static Tables that don't get modified by the app
-- Department
INSERT INTO
  departments (name)
VALUES
  ('Rebel Alliance');
INSERT INTO
  departments (name)
VALUES
  ('Galactic Empire');
INSERT INTO
  departments (name)
VALUES
  ('Nal Hutta');
--States
INSERT INTO
  states (name)
VALUES
  ('Backlog');
INSERT INTO
  states (name)
VALUES
  ('In Progress');
INSERT INTO
  states (name)
VALUES
  ('Blocked');
INSERT INTO
  states (name)
VALUES
  ('Completed');
--Roles TABLE
INSERT INTO
  role (name, cost_rate, bill_rate)
VALUES
  ('Jedi', 100, 500);
INSERT INTO
  role (name, cost_rate, bill_rate)
VALUES
  ('Princess', 100, 500);
INSERT INTO
  role (name, cost_rate, bill_rate)
VALUES
  ('Captain', 100, 500);
INSERT INTO
  role (name, cost_rate, bill_rate)
VALUES
  ('Sith Lord', 100, 500);
INSERT INTO
  role (name, cost_rate, bill_rate)
VALUES
  ('Co-Pilot', 100, 500);
INSERT INTO
  role (name, cost_rate, bill_rate)
VALUES
  ('Commander', 100, 500);
INSERT INTO
  role (name, cost_rate, bill_rate)
VALUES
  ('Crime Lord', 100, 500);
--Tables that do get modified by the app
  --People TABLE
INSERT INTO
  people (first_name, last_name, full_name, role_id)
VALUES
  ('Luke', 'Skywalker', 'Luke Skywalker', 1);
INSERT INTO
  people (first_name, last_name, full_name, role_id)
VALUES
  ('Leia', 'Organa', 'Leia Organa', 2);
INSERT INTO
  people (first_name, last_name, full_name, role_id)
VALUES
  ('Han', 'Solo', 'Han Solo', 3);
INSERT INTO
  people (first_name, last_name, full_name, role_id)
VALUES
  ('Darth', 'Vader', 'Darth Vader', 4);
INSERT INTO
  people (first_name, last_name, full_name, role_id)
VALUES
  (
    'Chewbacca',
    'Rahhggaahh Urughaghhh',
    'Chewbacca Rahhggaahh Urughaghhh',
    5
  );
INSERT INTO
  people (first_name, last_name, full_name, role_id)
VALUES
  ('Wilhuff', 'Tarkin', 'Wilhuff Tarkin', 6);
INSERT INTO
  people (first_name, last_name, full_name, role_id)
VALUES
  ('Jabba', 'Tiure', 'Jabba the Hut', 6);
--Projects TABLE
INSERT INTO
  projects (name, department_id)
VALUES
  ('Implement the Tarkin Doctrine', 1);
INSERT INTO
  projects (name, department_id)
VALUES
  ('Restore the Galactic Republic', 2);
INSERT INTO
  projects (name, department_id)
VALUES
  ('Improve Fiscal Outlook', 3);
--Tasks TABLE
INSERT INTO
  tasks (name, hours, cost, revenue, billable, personId, projectId, stateID)
VALUES
  ('Create propaganda', 30, 500, 50000, true);
INSERT INTO
  tasks (name, hours, cost, revenue, billable)
VALUES
  ('Get to Endor', 65, 500, 50000, true);
INSERT INTO
  tasks (name, hours, cost, revenue, billable)
VALUES
  ('Capture Han Solo', 100, 500, 50000, true);