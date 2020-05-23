have Postman installed, it is a great tool for testing the API

start by installing .NET, Angular and SQLite
dotnet new webapi -> creates an empty WebAPI with controllers
ng new ___ -> creates a new Angular app

install the following packages:
	-Entity Framework Core , .Sqlite, .Design
	-swashbuckle.SwaggerGen, .SwaggerUI
	-Microsoft.AspNetCore.Cors

you must have
	- Model folder (how the data looks)
	- Controllers (the interactions with the data)
	- Data (the Context files which link to the database)
change appsettings.json by adding

	"ConnectionStrings": {
    "DefaultConnection": "DataSource=F:\\Programming\\web\\Proj1\\database\\usersdb.db"
  },

in startup.ConfigureServices method

services.AddDbContext<UserContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

//don't forget to add the required imports for the upper tasks

if you have created context and model, use the following command to add migrations
	dotnet ef add migrations ___
After that link to the database using
	dotnet ef database update
BOOM, you should have a table inside your database