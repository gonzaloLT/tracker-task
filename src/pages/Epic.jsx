import React, { useContext } from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useParams } from "react-router-dom";
import { StoryCard } from "../components/StoryCard";
import { useFetchEpics } from "../hooks/useFetchEpics";
import { useFetchEpicsById } from "../hooks/useFetchEpicsById";
import { useFetchStoriesEpic } from "../hooks/useFetchStoriesEpic";

export const Epic = () => {
    const { epicId } = useParams();
    const { data: epic, loading: loadingEpics } = useFetchEpicsById(epicId)
    const { data: stories, loading: loadingStories } = useFetchStoriesEpic(epicId)
    console.log(epic)
    console.log('stories', stories)



    return (
        <LayoutDefault>
            <h1>Detalles de epica</h1>
            {loadingEpics ? <p>Cargando detalles de epica...</p> :
                <div>
                    <div className="details">
                        <h2>{epic.name} {epic.icon}</h2>
                        <p><b>Descripcion:</b> {epic.description}</p>
                    </div>
                    <div className="stories">
                        {loadingStories ? <p>Cargando historias...</p> : 
                            <ul>
                                {stories.map(story => 
                                    <StoryCard key={story._id} story={story}/>
                                )}
                            </ul>
                        }
                    </div>
                </div>

            }
        </LayoutDefault>
    )
};