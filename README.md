## Introduction

Movie App is an interactive movie search application that allows users to track their
favorite movies and to find movies seamlessly by typing into a search bar.
The application focuses on providing a responsive and user-friendly experience.

## Running The App

```bash
#First : install dependencies
bun i
#second : run the project
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Challenges and design decisions

I worked on separating usage of server and client components as much as possible and
to have file structure that makes the code more organized.<br />
I left the .env file in folder just for the test but my implementation protects api key
used to retrieve data from being exposed in client-side.

## Additional Features

added section for popular and top rated movies.<br />
implemented show more button which retrieves more search results upon user's request.<br />
Also added some styling and hero section for more appealing ui.
