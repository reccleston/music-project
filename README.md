# Top Tracks Playspace
### Team Members: Sarah D. Hood, Jini Hassan, Ryan Eccleston-Murdock, Wasif Khan, and Angeli Lucila

![Songs](https://github.com/reccleston/music-project/blob/main/wasif/static/img/concert.jpg)

## Dataset we used:
- [Top Spotify Songs from 2010-2019 - Kaggle](https://www.kaggle.com/leonardopena/top-spotify-songs-from-20102019-by-year)
    * Context: The top songs BY YEAR in the world by spotify. This dataset has several variables about the songs and is based on Billboard
    * Content: There are the most popular songs in the world by year and 13 variables to be explored. Data were stracted from: http://organizeyourmusic.playlistmachinery.com/
    * Variables Measured:
        - Popularity/pop: how popular a song is. The higher the number, the more popular it is.
        - Speechiness/spch: how much spoken word is in the track.
        - Acoustic-ness/acous: how acoustic the song is.
        - Duration/dur: how long the track is (in seconds).
        - Valence/val: how positive the track is.
        - Liveness/live: how likely it is for the track to be a live recording.
        - Decibels/dB: how loud the track is.
        - Danceability/dnce: how easy it is to dance to the song.
        - Energy/nrgy: how energetic the song is.
        - Beats Per Minute/bpm: how many beats per minute, or, the track’s tempo.


## Summary and Motivation:
This webpage displays information from a Kaggle dataset on the top songs (according to Billboard rankings) worldwide on Spotify between 2010 and 2019.

We were inspired to work on this dataset because Spotify is a widely used streaming application, and drawing connections between different song qualities (here called "factors") seemed like an intriguing idea.

## Folders Directory
- [Wasif Folder](https://github.com/reccleston/music-project/tree/main/wasif) includes all relevant files for our website. Use this directory to view. 
    * [App.py](https://github.com/reccleston/music-project/blob/main/wasif/app.py) contains the 
    * [static folder](https://github.com/reccleston/music-project/tree/main/wasif/static) contains all the javascript/css files for the visualizations
    * [schema folder]()
- [Angeli folder](https://github.com/reccleston/music-project/tree/main/angeli) shows relevant files for the bar chart visualization. 
- [Jini folder](https://github.com/reccleston/music-project/tree/main/jini) shows relevant files for the sunburst visualization. 
- [Ryan folder](https://github.com/reccleston/music-project/tree/main/ryan) shows relevant files for the correlation heatmap visualization.
- [Sarah folder](https://github.com/reccleston/music-project/tree/main/sarah) shows relevant files for the bubble chart visualization.

## How To Create The Database On Your Computer
1. Open pgAdmin and create a database called "music_project". 
2. Use the [schema file](https://github.com/reccleston/music-project/blob/main/wasif/schema/schema.sql) to create the tables. 
3. Import ["data_cleaned.csv"] (https://github.com/reccleston/music-project/blob/main/wasif/static/data/data_cleaned.csv) to the "data_cleaned" table. 
4. Import ["corr_heatmap_vals.csv"] (https://github.com/reccleston/music-project/blob/main/wasif/static/data/corr_heatmap_vals.csv) to the "corr_heatmap_vals" table. 
5. Import ["year.csv"] (https://github.com/reccleston/music-project/blob/main/wasif/static/data/year.csv) to the "year_table" table. 
6. Ensure that you modify your pgAdmin credentials in the variable "connection_string" in the [app.py](https://github.com/reccleston/music-project/blob/main/wasif/app.py) file. 



