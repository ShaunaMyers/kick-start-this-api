CREATE DATABASE kickstartthis(id SERIAL PRIMARY KEY, title VARCHAR(50), description VARCHAR(500), funds_goal INT, funds_raised INT, images TEXT[], creator_name NOT NULL TEXT, creator_email NOT NULL VARCHAR(100), created_at TIMESTAMP);

SET TIMEZONE = 'America/Los_Angeles';

INSERT INTO kickstartthis(title, description, funds_goal, funds_raised, images, creator_name, creator_email, created_at) VALUES ('Laundry nugget', 'This washing machine will save on electricy. You manually fill it with water, toss in the laundry detergent of your choice, and pedal away. Not only good for the environment but great for a daily workout. Typical wash time ranges depending on speed of pedaling: generally around 10 minutes. Drain and refill with rinse water and pedal for 5-10 minutes longer. Drain and dry.', 50000, '{}', 'Rooster Cogburn', 'roosterCog@hotmail.com', )