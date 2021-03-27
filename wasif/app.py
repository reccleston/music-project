# import os 
# from flask import Flask, jsonify, make_response
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func
# from sqlalchemy import inspect

# app = Flask(__name__)

# # EDIT --> proper engine + .env is needed
# engine = create_engine("postgresql://postgres:postgres@localhost:5432/music_project", echo=False)
# print(engine.table_names())
# # print(engine)
# Base = automap_base()
# # print(Base)
# Base.prepare(engine, reflect=True)
# # print(sqlalchemy.metadata.tables.keys())

# # EDIT --> load proper tables 
# data_cleaned = Base.classes.data_cleaned
# corr_heatmap_vals = Base.classes.corr_heatmap_vals
# year_table = Base.classes.year_table

# session = Session(engine)

# # music_data = {"data_cleaned":data_cleaned, "corr_heatmap_vals": corr_heatmap_vals, "year_table": year_table}

# @app.route('/')
# def dashboard():
#     return make_response(jsonify(music_data))

# if __name__ == "__main__":
#     app.run(debug=True)







# from sqlalchemy import create_engine
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy.orm import Session
# import os 
# # from dotenv import load_dotenv
# from flask import Flask, jsonify, make_response
# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy import create_engine, func
# from sqlalchemy import inspect

# app = Flask(__name__)

# # an Engine, which the Session will use for connection
# # resources
# some_engine = create_engine('postgresql://postgres:postgres@localhost:5432/music_project')

# # create a configured "Session" class
# Session = sessionmaker(bind=some_engine)

# # create a Session
# session = Session()

# # work with sess
# session.query("select * from data_cleaned")

# if __name__ == "__main__":
#     app.run(debug=True)




from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy import inspect
import simplejson as json

#################################################
# Database Setup
#################################################

connection_string = "postgres:postgres@localhost:5432/music_project"
engine = create_engine(f'postgresql://{connection_string}', echo=False)
connection = engine.connect()

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

#################################################
# Flask Routes
#################################################


# Either we use float for the values or use the simplejson
@app.route('/')
def dashboard():
    result = connection.execute("""SELECT * FROM data_cleaned;""")
    data = []
    for row in result:
        my_dict = {
            "title":row[0],
            "artist": row[1],
            "top genre": row[2],
            "year": row[3],
            "bpm": row[4],
            "nrgy": row[5],
            "dnce": row[6],
            "db": row[7],
            "live": row[8],
            "val": row[9],
            "dur": row[10],
            "acous": row[11],
            "spch": row[12],
            "pop": row[13]
        }
        data.append(my_dict)
        print(row)
    return(jsonify(data))


if __name__ == "__main__":
    app.run(debug=True)