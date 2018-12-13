import React, { Component } from 'react';
import Card from '../CardComponent/index';

class Homepage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cardData:[
                {
                    "id": "37146",
                    "type_id": "feedpost",
                    "feedpost_id": "feedpost:37146",
                    "ugc_id": "feedpost:37146",
                    "ugc_post": "I am not the best of my work and the time of the day of the day of school the time and the other side of",
                    "ugc_image_url": null,
                    "ugc_time": "",
                    "cover_image_ar": 1,
                    "images": [],
                    "web_detail_url": "community/feedpost/37146/i-am-not-the-best-of-my-work-and-the-time-of-the-day-of-the-day-of-school-the-time-and-the-other-sid",
                    "video_id": "",
                    "video_thumbnail": "",
                    "ugc_image_deeplink_url": null,
                    "card_image": "https://material-ui.com/static/images/cards/paella.jpg",
                    "auther_details":{
                        "id": "199561",
                        "user_id": "199561",
                        "name": "Suhana negi",
                        "email": "",
                        "mobile_number": "",
                        "momstar": "no",
                        "lifestage_id": "6",
                        "location_id": "77",
                        "locality_text": "Mumbai",
                        "expert": "false",
                        "babies_dob": "2019-01-31",
                        "article_count": "0",
                        "quickblox_id": "",
                        "created_at": "2017-11-26 18:21:27",
                        "avatar": "https://cdn.babychakra.com/babychakraserviceproviders/75x75/users/original/199561/profile_5a9fe229340ce.jpg",
                        "user_type": "",
                        "background_image": "",
                        "background_color": "",
                        "url": "/user/199561/profile",
                        "str_lifestage": "28 weeks pregnant",
                        "is_following": false,
                        "num_reviews": "0",
                        "num_followers": "21",
                        "num_following": "21",
                        "designation_image": "",
                        "description": "",
                        "activity_count": "16",
                        "activity_count_text": "16 Activities",
                        "is_social_profile_linked": false,
                        "language_preference_code": "en",
                        "language_preference_name": "English"
                    }
                },
                {
                    "id": "48456",
                    "type_id": "question",
                    "question_id": "question:48456",
                    "author_id": "user:199561",
                    "question_post": "What's on your mind tell me",
                    "question_image_url": null,
                    "question_time": "",
                    "is_anonymous": false,
                    "expert_categories": [
                        "expert_category:1"
                    ],
                    "cover_image_ar": 1,
                    "images": [],
                    "web_detail_url": "community/question/48456/what-s-on-your-mind-tell-me",
                    "auther_details":{
                        "id": "194836",
                        "user_id": "194836",
                        "name": "Tina Mathur",
                        "email": "bbctester54@gmail.com",
                        "mobile_number": "",
                        "momstar": "no",
                        "lifestage_id": "6",
                        "location_id": "22820",
                        "locality_text": "Handapangoda",
                        "expert": "false",
                        "babies_dob": "2018-12-13",
                        "article_count": "0",
                        "quickblox_id": "",
                        "created_at": "2017-11-17 16:55:11",
                        "avatar": "https://cdn.babychakra.com/babychakraserviceproviders/75x75/users/original/194836/profile_5b10f4b4c813d.jpg",
                        "user_type": "",
                        "background_image": "",
                        "background_color": "",
                        "url": "/user/194836/profile",
                        "str_lifestage": "35 weeks pregnant",
                        "is_following": true,
                        "num_reviews": "0",
                        "num_followers": "20",
                        "num_following": "22",
                        "designation_image": "",
                        "description": "",
                        "activity_count": "21",
                        "activity_count_text": "21 Activities",
                        "is_social_profile_linked": true,
                        "language_preference_code": "en",
                        "language_preference_name": "English"
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div className="homepage-container">
                <div className="homepage-feed-container">
                    {
                        this.state.cardData.map(
                            (card, index)=>
                                (<div className="homepage-feed-card-container" key = {index}>
                                    <Card
                                        cardDetails = {card}
                                    />
                                </div>)
                        )
                    }
                    
                </div>
            </div>
        );
    }
}

export default Homepage;