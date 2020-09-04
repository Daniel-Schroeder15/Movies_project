-- Creating Provitional Tables for Database
CREATE TABLE movie_scores_genre (
	title TEXT PRIMARY KEY NOT NULL,
	genre TEXT,
 	SCORE INTEGER
 );

 CREATE TABLE datasets_movies (
	budget INTEGER,
	company TEXT,
	country TEXT,
	director TEXT,
	genre TEXT,
	gross INTEGER,
	name TEXT PRIMARY KEY NOT NULL,
	rating INTEGER,
	released DATE,
	runtime INTEGER,
 	score INTEGER,
	star INTEGER,
	votes INTEGER,
	writer TEXT,
	year INTEGER
);

-- Joining Streaming_Movie_Data and Movie_Data tables
CREATE TABLE Streaming_Nonencoded_Data AS
     SELECT 
          smd."Title",
          smd."Netflix",
          smd."Hulu",
          smd."Prime Video",
          smd."Disney+",
          mdne."title",
          mdne."budget",
          mdne."company",
          mdne."country",
          mdne."director",
          mdne."genre",
          mdne."rating",
          mdne."score",
          mdne."star",
          mdne."votes",
          mdne."writer",
          mdne."original_language",
          mdne."popularity",
          mdne."revenue",
          mdne."runtime",
          mdne."release_year",
          mdne."release_month",
          mdne."release_day"
     FROM public."Movie_Data_Nonencoded" as mdne
     LEFT JOIN public."Streaming_Movie_Data" as smd
          ON mdne."title" = smd."Title";

CREATE TABLE Streaming_Encoded_Data AS
     SELECT 
          smd."Title",
          smd."Netflix",
          smd."Hulu",
          smd."Prime Video",
          smd."Disney+",
          mde."title",
          mde."budget",
          mde."score",
          mde."votes",
          mde."popularity",
          mde."revenue",
          mde."runtime",
          mde."release_year",
          mde."release_month",
          mde."release_day",
          mde."company_Columbia Pictures",                    
          mde."company_Columbia Pictures Corporation",       
          mde."company_DreamWorks",                           
          mde."company_Fox 2000 Pictures",                   
          mde."company_Metro Goldwyn Mayer",              
          mde."company_Miramax",                         
          mde."company_New Line Cinema",               
          mde."company_Other",                            
          mde."company_Paramount Pictures",                  
          mde."company_Touchstone Pictures",                 
          mde."company_Twentieth Century Fox Film Corporation",
          mde."company_Universal Pictures",                  
          mde."company_Walt Disney Pictures",                
          mde."company_Warner Bros.",                       
          mde."country_Australia",                          
          mde."country_Canada",                              
          mde."country_France",                               
          mde."country_Germany",                                                        
          mde."country_Japan",                               
          mde."country_Other",                                
          mde."country_Spain",                               
          mde."country_UK",                                  
          mde."country_USA",                                 
          mde."director_Barry Levinson",                      
          mde."director_Bobby Farrelly",                      
          mde."director_Chris Columbus",                     
          mde."director_Clint Eastwood",                      
          mde."director_Joel Schumacher",                   
          mde."director_Kevin Smith",                       
          mde."director_Martin Scorsese",                    
          mde."director_Michael Bay",                       
          mde."director_Oliver Stone",                      
          mde."director_Other",                            
          mde."director_Renny Harlin",                     
          mde."director_Richard Linklater",                 
          mde."director_Ridley Scott",                     
          mde."director_Rob Reiner",                      
          mde."director_Robert Zemeckis",                  
          mde."director_Ron Howard",                       
          mde."director_Shawn Levy",                       
          mde."director_Spike Lee",                       
          mde."director_Steven Soderbergh",                
          mde."director_Steven Spielberg",                
          mde."director_Tim Burton",                      
          mde."director_Tony Scott",                      
          mde."director_Woody Allen",                    
          mde."genre_Action",                            
          mde."genre_Adventure",                            
          mde."genre_Animation",                          
          mde."genre_Biography",                           
          mde."genre_Comedy",                                
          mde."genre_Crime",                                
          mde."genre_Drama",                               
          mde."genre_Family",                              
          mde."genre_Fantasy",                             
          mde."genre_Horror",                              
          mde."genre_Mystery",                              
          mde."genre_Romance",                              
          mde."genre_Sci-Fi",                              
          mde."genre_Thriller",                             
          mde."genre_Western",                              
          mde."rating_G",                                   
          mde."rating_NC-17",                               
          mde."rating_NOT RATED",                           
          mde."rating_Not specified",                       
          mde."rating_PG",                               
          mde."rating_PG-13",                              
          mde."rating_R",                                  
          mde."rating_UNRATED",                              
          mde."star_Adam Sandler",                          
          mde."star_Ben Stiller",                          
          mde."star_Bruce Willis",                         
          mde."star_Denzel Washington",                     
          mde."star_George Clooney",                        
          mde."star_Johnny Depp",                         
          mde."star_Matt Damon",                           
          mde."star_Nicolas Cage",                          
          mde."star_Other",                                 
          mde."star_Robert De Niro",                       
          mde."star_Tom Cruise",                            
          mde."star_Tom Hanks",                                                    
          mde."writer_Brian Helgeland",                      
          mde."writer_Ehren Kruger",                         
          mde."writer_Joel Coen",                           
          mde."writer_Kevin Smith",                         
          mde."writer_Luc Besson",                         
          mde."writer_M. Night Shyamalan",                   
          mde."writer_Michael Crichton",                    
          mde."writer_Other",                             
          mde."writer_Quentin Tarantino",                    
          mde."writer_Stephen King",                         
          mde."writer_Wes Craven",                                            
          mde."writer_Woody Allen",                         
          mde."original_language_Other",                    
          mde."original_language_en",                                             
          mde."original_language_fr",                       
          mde."original_language_zh"
     FROM public."Movie_Data_Encoded" as mde
     LEFT JOIN public."Streaming_Movie_Data" as smd
          ON mde."title" = smd."Title";

CREATE TABLE Streaming_Movie_Info AS
     SELECT 
          smd."Title",
          smd."Netflix",
          smd."Hulu",
          smd."Prime Video",
          smd."Disney+",
          mi."title",
          mi."genre",
          mi."rating",
          mi."score",
          mi."popularity",
          mi."overview",
          mi."keywords_name",
          mi."keywords"
     FROM public."Movie_Info" as mi
     LEFT JOIN public."Streaming_Movie_Data" as smd
          ON mi."title" = smd."Title";

-- ERD diagram

Streaming_Movie_Data
-
Title varchar pk FK
Netflix float
Hulu float
Prime_Video float
Disney+ float

Movie_Info
-
title varchar pk FK >- Streaming_Movie_Data.Title
genre varchar
rating varchar
score float
popularity float
overview varchar
keywords_name varchar
keywords varchar

Movie_Data_Nonencoded
-
title varchar pk FK >- Streaming_Movie_Data.Title
budget float
company varchar
country varchar
director varchar
genre varchar
rating varchar
score float
star varchar
votes int
writer varchar
original_language varchar
popularity float
revenue int
runtime float
release_year int
release_month int
release_day int

Movie_Data_Encoded
-
title varchar pk FK - Streaming_Movie_Data.Title
budget float
score float
votes int
popularity float
revenue int
runtime float
release_year int
release_month int
release_day int
company_Columbia_Pictures float                    
company_Columbia_Pictures_Corporation float        
company_DreamWorks float                           
company_Fox_2000_Pictures float                    
company_Metro_Goldwyn_Mayer float                
company_Miramax float                              
company_New_Line_Cinema float                      
company_Other float                                
company_Paramount_Pictures float                   
company_Touchstone_Pictures float                  
company_Twentieth_Century_Fox_Film_Corporation float
company_Universal_Pictures float                   
company_Walt_Disney_Pictures float                 
company_Warner_Bros. float                         
country_Australia float                            
country_Canada float                               
country_France float                               
country_Germany float                              
country_Japan float                                
country_Other float                                
country_Spain float                                
country_UK float                                   
country_USA float                                  
director_Barry_Levinson float                      
director_Bobby_Farrelly float                      
director_Chris_Columbus float                      
director_Clint_Eastwood float                      
director_Joel_Schumacher float                     
director_Kevin_Smith float                         
director_Martin_Scorsese float                     
director_Michael_Bay float                        
director_Oliver_Stone float                       
director_Other float                              
director_Renny_Harlin float                       
director_Richard_Linklater float                  
director_Ridley_Scott float                       
director_Rob_Reiner float                         
director_Robert_Zemeckis float                    
director_Ron_Howard float                         
director_Shawn_Levy float                         
director_Spike_Lee float                          
director_Steven_Soderbergh float                  
director_Steven_Spielberg float                   
director_Tim_Burton float                         
director_Tony_Scott float                         
director_Woody_Allen float                        
genre_Action float                                
genre_Adventure float                             
genre_Animation float                             
genre_Biography float                             
genre_Comedy float                                 
genre_Crime float                                 
genre_Drama float                                 
genre_Family float                                
genre_Fantasy float                               
genre_Horror float                                
genre_Mystery float                               
genre_Romance float                               
genre_Sci-Fi float                                
genre_Thriller float                              
genre_Western float                               
rating_G float                                    
rating_NC-17 float                                
rating_NOT_RATED float                            
rating_Not_specified float                        
rating_PG float                                   
rating_PG-13 float                                
rating_R float                                    
rating_UNRATED float                              
star_Adam_Sandler float                           
star_Ben_Stiller float                            
star_Bruce_Willis float                           
star_Denzel_Washington float                      
star_George_Clooney float                         
star_Johnny_Depp float                            
star_Matt_Damon float                             
star_Nicolas_Cage float                           
star_Other float                                  
star_Robert_De_Niro float                         
star_Tom_Cruise float                             
star_Tom_Hanks float                                                      
writer_Brian_Helgeland float                      
writer_Ehren_Kruger float                         
writer_Joel_Coen float                            
writer_Kevin_Smith float                          
writer_Luc_Besson float                           
writer_M._Night_Shyamalan float                   
writer_Michael_Crichton float                     
writer_Other float                                
writer_Quentin_Tarantino float                    
writer_Stephen_King float                         
writer_Wes_Craven float                                            
writer_Woody_Allen float                          
original_language_Other float                     
original_language_en float                        
original_language_fr float                        
original_language_zh float