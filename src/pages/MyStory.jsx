import React from "react";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { useAuth } from '../auth/AuthProvider'
import { useFetchStories } from "../hooks/useFetchStories";
import {StoryCard} from '../components/StoryCard'

export const MyStory = () => {
    const {user} = useAuth()

    const {data: storiesData, loading: loadingStories} = useFetchStories();

    const stories = storiesData.filter((story) => story.owner === user._id)

    console.log(stories)
    return (
        <LayoutDefault>
            <div>
                <h1>Mis historias</h1>
                {loadingStories ? <p>Cargando historias...</p>:
                    stories.map(story => <StoryCard key={story._id} story={story}/>)
                }
            </div>
        </LayoutDefault>
    );
};
