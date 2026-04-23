// Données copiées depuis https://www.reddit.com/r/popular.json (impression élégante du navigateur)
//
// SUBTILITÉ JSON vs OBJET JS :
// Ce que le navigateur affiche (et ce que fetch() reçoit) est du TEXTE JSON — une simple string :
//   '{"kind":"Listing","data":{...}}'
//
// En collant ce contenu après "= " dans un fichier .js (sans guillemets autour),
// on écrit un OBJET JS LITTÉRAL. Lors de l'import, le moteur JS l'exécute
// et le retourne directement comme un vrai objet en mémoire — pas besoin de JSON.parse().
//
// Comparaison :
//   const x = '{"kind":"Listing"}';  → string JSON  → nécessite JSON.parse(x)
//   const x =  {"kind":"Listing"} ;  → objet JS     → utilisable directement
//
// C'est pourquoi dans les tests, json: vi.fn().mockResolvedValue(mockRealRedditArticles)
// est correct : response.json() retourne un objet JS, et c'est bien ce qu'on fournit ici.
export const mockRealRedditArticles = {
  "kind": "Listing",
  "data": {
    "after": "t3_1ss85rp",
    "dist": 25,
    "modhash": "k5qdjxnd3sd6366c446285c040875959b74b2942706f3c7da4",
    "geo_filter": null,
    "children": [
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "BrandNewSentence",
          "selftext": "",
          "author_fullname": "t2_1ghzjbucbb",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Are you putting milk in my milk??!",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/BrandNewSentence",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ssce0t",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.98,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 12624,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 12624,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?width=140&amp;height=140&amp;crop=1:1,smart&amp;auto=webp&amp;s=7deb31fca995104c095aab61df1052189b351158",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776836093,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/8u4qqjnyhowg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?auto=webp&amp;s=d8bd2deeca700b2cedfceb861a538de853da77bc",
                  "width": 1320,
                  "height": 1896
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=a03434c7ea48aad0dabb1521605c6591590d29c6",
                    "width": 108,
                    "height": 155
                  },
                  {
                    "url": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=7759a741e7a3b2f33f2f22e38f9f2fb8a66a42c4",
                    "width": 216,
                    "height": 310
                  },
                  {
                    "url": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=127386e465d048162cc448011fc8e24fbbbd26b3",
                    "width": 320,
                    "height": 459
                  },
                  {
                    "url": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=28736361336cd6fbd9384b99881a057ef78e23c3",
                    "width": 640,
                    "height": 919
                  },
                  {
                    "url": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=5a4c2ce711cf671cac895286d2972bd03eaef326",
                    "width": 960,
                    "height": 1378
                  },
                  {
                    "url": "https://preview.redd.it/8u4qqjnyhowg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=99861796c9d9c30bee99c0c47697b6fa11308a1a",
                    "width": 1080,
                    "height": 1551
                  }
                ],
                "variants": {

                },
                "id": "8u4qqjnyhowg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_mbn0j",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1ssce0t",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "New-Needleworker6020",
          "discussion_type": null,
          "num_comments": 241,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/BrandNewSentence/comments/1ssce0t/are_you_putting_milk_in_my_milk/",
          "stickied": false,
          "url": "https://i.redd.it/8u4qqjnyhowg1.jpeg",
          "subreddit_subscribers": 1535856,
          "created_utc": 1776836093,
          "num_crossposts": 7,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "PeterExplainsTheJoke",
          "selftext": "Saw this on Instagram and didn't get any info on those funnier reasons.",
          "author_fullname": "t2_ka9kdozf",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Peter, what are those reasons?",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/PeterExplainsTheJoke",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "",
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1sse0jq",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.98,
          "author_flair_background_color": null,
          "ups": 6766,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Meme needing explanation",
          "can_mod_post": false,
          "score": 6766,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?width=140&amp;height=140&amp;crop=1:1,smart&amp;auto=webp&amp;s=1e1e99d5e5eb3cb71f2f98d9d639591dea1bd136",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776841541,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Saw this on Instagram and didn&amp;#39;t get any info on those funnier reasons.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": "top",
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/xz1xwcf5yowg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?auto=webp&amp;s=a2b2e869718fa78bf736329f4c8cb0437ff35136",
                  "width": 1080,
                  "height": 1225
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=264b03bc14d6fcd76b4bde56c011dd24ae827930",
                    "width": 108,
                    "height": 122
                  },
                  {
                    "url": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=e0cb9d6c861b1c79845c6dc308dc4a1dc8620768",
                    "width": 216,
                    "height": 245
                  },
                  {
                    "url": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=24eb051c73cb6d1fb579052a24678f8eed8e5567",
                    "width": 320,
                    "height": 362
                  },
                  {
                    "url": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=2c5f5ba3dab2c18bf2de01d29500841e34cfcf50",
                    "width": 640,
                    "height": 725
                  },
                  {
                    "url": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=19d06e3271945a7f6026b5f3a518f2bd45a9e261",
                    "width": 960,
                    "height": 1088
                  },
                  {
                    "url": "https://preview.redd.it/xz1xwcf5yowg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=50ab912c2aa7d48d5f40afc1653352948a82c9d6",
                    "width": 1080,
                    "height": 1225
                  }
                ],
                "variants": {

                },
                "id": "xz1xwcf5yowg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "e044e9ac-8029-11e9-a145-0e2ba898fc36",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_121h8r",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#dadada",
          "id": "1sse0jq",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "No-Information2751",
          "discussion_type": null,
          "num_comments": 239,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/PeterExplainsTheJoke/comments/1sse0jq/peter_what_are_those_reasons/",
          "stickied": false,
          "url": "https://i.redd.it/xz1xwcf5yowg1.jpeg",
          "subreddit_subscribers": 3308865,
          "created_utc": 1776841541,
          "num_crossposts": 2,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "mildlyinteresting",
          "selftext": "",
          "author_fullname": "t2_1rz5d3g3wy",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "This two-piece Dolly Parton cutout uses the screw that holds the two pieces together as her ring",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "Quality Post"
            }
          ],
          "subreddit_name_prefixed": "r/mildlyinteresting",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "",
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss7q8o",
          "quarantine": false,
          "link_flair_text_color": "light",
          "upvote_ratio": 0.98,
          "author_flair_background_color": "",
          "ups": 24103,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": true,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Quality Post",
          "can_mod_post": false,
          "score": 24103,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/f5q98xw3enwg1.jpeg?width=140&amp;height=140&amp;auto=webp&amp;s=59181340aeb5aed620558b848b3b0a52674e0534",
          "edited": false,
          "author_flair_css_class": "1s 1pu9nwv",
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776822701,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/f5q98xw3enwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/f5q98xw3enwg1.jpeg?auto=webp&amp;s=114fa9702444da3be4ebb97fdaa5f36cd9f00e37",
                  "width": 2880,
                  "height": 2880
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/f5q98xw3enwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=7dac9dc29405993d8b9aecfb463fd278b26f5aa4",
                    "width": 108,
                    "height": 108
                  },
                  {
                    "url": "https://preview.redd.it/f5q98xw3enwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=25d35ecaed65ca779ea2177b8da90639dedbdeec",
                    "width": 216,
                    "height": 216
                  },
                  {
                    "url": "https://preview.redd.it/f5q98xw3enwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=13a8f10af2e8fc50e2308a39954a725356e0f77f",
                    "width": 320,
                    "height": 320
                  },
                  {
                    "url": "https://preview.redd.it/f5q98xw3enwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=c9968ba1d3e1876a333cfda28f45d439482c16ec",
                    "width": 640,
                    "height": 640
                  },
                  {
                    "url": "https://preview.redd.it/f5q98xw3enwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=68883e123f76de4015b496cbac25d13d0ba6ef90",
                    "width": 960,
                    "height": 960
                  },
                  {
                    "url": "https://preview.redd.it/f5q98xw3enwg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=95ceb84bfde39900d01ebe017c321c3c2b697cde",
                    "width": 1080,
                    "height": 1080
                  }
                ],
                "variants": {

                },
                "id": "f5q98xw3enwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "82f9d03a-0e3e-11e4-9313-12313d224df5",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2ti4h",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#ddbd37",
          "id": "1ss7q8o",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "Tbagts",
          "discussion_type": null,
          "num_comments": 124,
          "send_replies": false,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": "dark",
          "permalink": "/r/mildlyinteresting/comments/1ss7q8o/this_twopiece_dolly_parton_cutout_uses_the_screw/",
          "stickied": false,
          "url": "https://i.redd.it/f5q98xw3enwg1.jpeg",
          "subreddit_subscribers": 25116932,
          "created_utc": 1776822701,
          "num_crossposts": 5,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "AskReddit",
          "selftext": "",
          "author_fullname": "t2_8g38hqow",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "What’s a game you were completely obsessed with as a kid that nobody else seems to remember?",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/AskReddit",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": null,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss6ctd",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.96,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 2931,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": null,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 2931,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "self",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "content_categories": null,
          "is_self": true,
          "mod_note": null,
          "created": 1776819119,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "self.AskReddit",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2qh1i",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1ss6ctd",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "hkondabeatz",
          "discussion_type": null,
          "num_comments": 9339,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/AskReddit/comments/1ss6ctd/whats_a_game_you_were_completely_obsessed_with_as/",
          "stickied": false,
          "url": "https://www.reddit.com/r/AskReddit/comments/1ss6ctd/whats_a_game_you_were_completely_obsessed_with_as/",
          "subreddit_subscribers": 58317140,
          "created_utc": 1776819119,
          "num_crossposts": 4,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "MadeMeSmile",
          "selftext": "",
          "author_fullname": "t2_6pbjd6qz",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "the people have chosen",
          "link_flair_richtext": [
            {
              "a": ":snoo_putback:",
              "e": "emoji",
              "u": "https://emoji.redditmedia.com/8228r6bhaezz_t5_3nqvj/snoo_putback"
            },
            {
              "e": "text",
              "t": " Good Vibes "
            },
            {
              "a": ":snoo_tongue:",
              "e": "emoji",
              "u": "https://emoji.redditmedia.com/pgm55sg3aezz_t5_3nqvj/snoo_tongue"
            }
          ],
          "subreddit_name_prefixed": "r/MadeMeSmile",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "",
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss6v42",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.97,
          "author_flair_background_color": null,
          "ups": 32436,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": {
            "reddit_video": {
              "bitrate_kbps": 2400,
              "fallback_url": "https://v.redd.it/ykdmaatf7nwg1/CMAF_720.mp4?source=fallback",
              "has_audio": true,
              "height": 1280,
              "width": 720,
              "scrubber_media_url": "https://v.redd.it/ykdmaatf7nwg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/ykdmaatf7nwg1/DASHPlaylist.mpd?a=1779445358%2CZmVmNmVhYTQxZjc0OWU0MjZhOGFjNDY1NDNhODRmYWE3NTljYzVhMmMyNGM2NWI4MDc5ZDgwOGNmYTExMmNlNw%3D%3D&amp;v=1&amp;f=sd",
              "duration": 20,
              "hls_url": "https://v.redd.it/ykdmaatf7nwg1/HLSPlaylist.m3u8?a=1779445358%2CYzQ1ZmI2NWYyNGRkYmU3NjlhNzRjY2RjYTI3ZTZlNmVhNmI1OWQ5NDRiYzJlMDhjNTUyMmFmYzU3NmI0NTM0Yg%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": ":snoo_putback: Good Vibes :snoo_tongue:",
          "can_mod_post": false,
          "score": 32436,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://external-preview.redd.it/YzdscWk0cmY3bndnMQCk1kyUL1pK1iHrcAQziRNBMRDiYxMJLePZyjfda__g.png?width=140&amp;height=140&amp;crop=1:1,smart&amp;format=jpg&amp;auto=webp&amp;s=30eb2f738d2c2b49571e7c7e45b67969b1e70bdf",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "hosted:video",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776820449,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "v.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://v.redd.it/ykdmaatf7nwg1",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/YzdscWk0cmY3bndnMQCk1kyUL1pK1iHrcAQziRNBMRDiYxMJLePZyjfda__g.png?format=pjpg&amp;auto=webp&amp;s=7e7fb000cee076495f84cce75164d5ea2e161595",
                  "width": 720,
                  "height": 1280
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/YzdscWk0cmY3bndnMQCk1kyUL1pK1iHrcAQziRNBMRDiYxMJLePZyjfda__g.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=41c6af559a6b37c57c548fdb4d3dbbca09478069",
                    "width": 108,
                    "height": 192
                  },
                  {
                    "url": "https://external-preview.redd.it/YzdscWk0cmY3bndnMQCk1kyUL1pK1iHrcAQziRNBMRDiYxMJLePZyjfda__g.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=bdc9e50041531e0823b554b3961115c4c7b74e51",
                    "width": 216,
                    "height": 384
                  },
                  {
                    "url": "https://external-preview.redd.it/YzdscWk0cmY3bndnMQCk1kyUL1pK1iHrcAQziRNBMRDiYxMJLePZyjfda__g.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=38b237251486fc78cf4ccd9ce09d2f2d6f7add88",
                    "width": 320,
                    "height": 568
                  },
                  {
                    "url": "https://external-preview.redd.it/YzdscWk0cmY3bndnMQCk1kyUL1pK1iHrcAQziRNBMRDiYxMJLePZyjfda__g.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=43eefebf7cdde6c3bd6a1d63d1022bcedc55c89b",
                    "width": 640,
                    "height": 1137
                  }
                ],
                "variants": {

                },
                "id": "YzdscWk0cmY3bndnMQCk1kyUL1pK1iHrcAQziRNBMRDiYxMJLePZyjfda__g"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "50fe798e-b971-11ea-8476-0e4d1ba3a22f",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2uqcm",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#edeff1",
          "id": "1ss6v42",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "bbyxmadi",
          "discussion_type": null,
          "num_comments": 226,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/MadeMeSmile/comments/1ss6v42/the_people_have_chosen/",
          "stickied": false,
          "url": "https://v.redd.it/ykdmaatf7nwg1",
          "subreddit_subscribers": 12269825,
          "created_utc": 1776820449,
          "num_crossposts": 4,
          "media": {
            "reddit_video": {
              "bitrate_kbps": 2400,
              "fallback_url": "https://v.redd.it/ykdmaatf7nwg1/CMAF_720.mp4?source=fallback",
              "has_audio": true,
              "height": 1280,
              "width": 720,
              "scrubber_media_url": "https://v.redd.it/ykdmaatf7nwg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/ykdmaatf7nwg1/DASHPlaylist.mpd?a=1779445358%2CZmVmNmVhYTQxZjc0OWU0MjZhOGFjNDY1NDNhODRmYWE3NTljYzVhMmMyNGM2NWI4MDc5ZDgwOGNmYTExMmNlNw%3D%3D&amp;v=1&amp;f=sd",
              "duration": 20,
              "hls_url": "https://v.redd.it/ykdmaatf7nwg1/HLSPlaylist.m3u8?a=1779445358%2CYzQ1ZmI2NWYyNGRkYmU3NjlhNzRjY2RjYTI3ZTZlNmVhNmI1OWQ5NDRiYzJlMDhjNTUyMmFmYzU3NmI0NTM0Yg%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_video": true
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "Steam",
          "selftext": "",
          "author_fullname": "t2_1nvciqbapz",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "What cheap game on Steam turned out to be absolute peak for you?",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "Fluff"
            }
          ],
          "subreddit_name_prefixed": "r/Steam",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "fluff",
          "downs": 0,
          "thumbnail_height": 93,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1srt8rr",
          "quarantine": false,
          "link_flair_text_color": "light",
          "upvote_ratio": 0.93,
          "author_flair_background_color": null,
          "ups": 20838,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Fluff",
          "can_mod_post": false,
          "score": 20838,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/nz9g7ksaokwg1.gif?frame=1&amp;width=140&amp;height=93&amp;auto=webp&amp;s=1f60d53ae71c30aee32bd70dee5f54520e536cab",
          "author_cakeday": true,
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776789814,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/nz9g7ksaokwg1.gif",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?format=png8&amp;s=115027f465fd542239ab5f4b8accc015643ba73f",
                  "width": 800,
                  "height": 536
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=108&amp;crop=smart&amp;format=png8&amp;s=984436f2a9675ead6f7f9b08dc3afeddd1b9da33",
                    "width": 108,
                    "height": 72
                  },
                  {
                    "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=216&amp;crop=smart&amp;format=png8&amp;s=832b174a06eec354b0446ad25040b96a89d25c3d",
                    "width": 216,
                    "height": 144
                  },
                  {
                    "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=320&amp;crop=smart&amp;format=png8&amp;s=61c12e53f03cc1e754cd8d1b569ac733f921ca64",
                    "width": 320,
                    "height": 214
                  },
                  {
                    "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=640&amp;crop=smart&amp;format=png8&amp;s=1023d0f52fb07c9abaec1ecd1a59876a99c74f8e",
                    "width": 640,
                    "height": 428
                  }
                ],
                "variants": {
                  "gif": {
                    "source": {
                      "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?s=43dff256036adbcebd9e7530286a85792bedecf7",
                      "width": 800,
                      "height": 536
                    },
                    "resolutions": [
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=108&amp;crop=smart&amp;s=877d2a81e3a843520ed5e2a30e67b48725a3ba6d",
                        "width": 108,
                        "height": 72
                      },
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=216&amp;crop=smart&amp;s=8565a79a366541019478eebe2fb9f1c9696ba914",
                        "width": 216,
                        "height": 144
                      },
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=320&amp;crop=smart&amp;s=05018810043e7513e6c2529e3aa6f72885f0014f",
                        "width": 320,
                        "height": 214
                      },
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=640&amp;crop=smart&amp;s=6e989d1abf4645cdfe7032c8d146664b1e2c2027",
                        "width": 640,
                        "height": 428
                      }
                    ]
                  },
                  "mp4": {
                    "source": {
                      "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?format=mp4&amp;s=819cba6511a8c104a3ce841e17b5c4170c78f42d",
                      "width": 800,
                      "height": 536
                    },
                    "resolutions": [
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=108&amp;format=mp4&amp;s=15dbaf941698a88090d17b0088e7abff97cfc1fb",
                        "width": 108,
                        "height": 72
                      },
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=216&amp;format=mp4&amp;s=c6bf741a569a68071c9b5f4eb2924f5b99ae6a15",
                        "width": 216,
                        "height": 144
                      },
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=320&amp;format=mp4&amp;s=d8e742fc27810bf9ee0787c477e137bfc277efda",
                        "width": 320,
                        "height": 214
                      },
                      {
                        "url": "https://preview.redd.it/nz9g7ksaokwg1.gif?width=640&amp;format=mp4&amp;s=a65aa71610c0a774cc63af14f1ddca57bed8ea67",
                        "width": 640,
                        "height": 428
                      }
                    ]
                  }
                },
                "id": "nz9g7ksaokwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "bafbcbb4-cd27-11e6-a169-0e961a69d3da",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2qwis",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#ccac2b",
          "id": "1srt8rr",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "Common_Caramel_4078",
          "discussion_type": null,
          "num_comments": 4283,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/Steam/comments/1srt8rr/what_cheap_game_on_steam_turned_out_to_be/",
          "stickied": false,
          "url": "https://i.redd.it/nz9g7ksaokwg1.gif",
          "subreddit_subscribers": 5187840,
          "created_utc": 1776789814,
          "num_crossposts": 7,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "interesting",
          "selftext": "",
          "author_fullname": "t2_27g84m5zxu",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Wholesome moment captured at Boston Marathon 🥹",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/interesting",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1srt57o",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.91,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 86934,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": {
            "reddit_video": {
              "bitrate_kbps": 5000,
              "fallback_url": "https://v.redd.it/5b77a7opnkwg1/CMAF_1080.mp4?source=fallback",
              "has_audio": true,
              "height": 1920,
              "width": 1080,
              "scrubber_media_url": "https://v.redd.it/5b77a7opnkwg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/5b77a7opnkwg1/DASHPlaylist.mpd?a=1779445358%2CMDY5OTNkM2EzNjU0NGU2YzFmYjkyZjFlNjQ0YTgyM2U5MDJmM2M4ZjM1MTIzMDM5NTFmZDEwMTg1MWQ1YTVlNQ%3D%3D&amp;v=1&amp;f=sd",
              "duration": 53,
              "hls_url": "https://v.redd.it/5b77a7opnkwg1/HLSPlaylist.m3u8?a=1779445358%2CMGMxNDViMzZhMjFhNjg3MjQ0MmQ4YzAzZTNiMmI3ZDJhNzVmMjkzYWVmZWU3OGJiMDFiZGUzM2Y1NmNmNzZkMw%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Context Provided - Spotlight",
          "can_mod_post": false,
          "score": 86934,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://external-preview.redd.it/ZjRnYm5rb3Bua3dnMdd4UIZH7cAlFr2_xPb6UsaHtmyARFjegV2IYZ7q3SnG.png?width=140&amp;height=140&amp;crop=1:1,smart&amp;format=jpg&amp;auto=webp&amp;s=836588276cec7fa9c334b0712cfb847f17b4096d",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "hosted:video",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776789603,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "v.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": "confidence",
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://v.redd.it/5b77a7opnkwg1",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/ZjRnYm5rb3Bua3dnMdd4UIZH7cAlFr2_xPb6UsaHtmyARFjegV2IYZ7q3SnG.png?format=pjpg&amp;auto=webp&amp;s=186eb72f8a1b61966556478ad470a6ba4a4b6994",
                  "width": 405,
                  "height": 720
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/ZjRnYm5rb3Bua3dnMdd4UIZH7cAlFr2_xPb6UsaHtmyARFjegV2IYZ7q3SnG.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=32eeb35b91ef13c2c2e648b76c425850f78007ac",
                    "width": 108,
                    "height": 192
                  },
                  {
                    "url": "https://external-preview.redd.it/ZjRnYm5rb3Bua3dnMdd4UIZH7cAlFr2_xPb6UsaHtmyARFjegV2IYZ7q3SnG.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=37e0612e73bb81d3bccb95f0c6807f174e4ff6e6",
                    "width": 216,
                    "height": 384
                  },
                  {
                    "url": "https://external-preview.redd.it/ZjRnYm5rb3Bua3dnMdd4UIZH7cAlFr2_xPb6UsaHtmyARFjegV2IYZ7q3SnG.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=a385e093bc3bd4dfd398dfe775b812ec2754506c",
                    "width": 320,
                    "height": 568
                  }
                ],
                "variants": {

                },
                "id": "ZjRnYm5rb3Bua3dnMdd4UIZH7cAlFr2_xPb6UsaHtmyARFjegV2IYZ7q3SnG"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2qib0",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1srt57o",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "uzmansahil7",
          "discussion_type": null,
          "num_comments": 3153,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/interesting/comments/1srt57o/wholesome_moment_captured_at_boston_marathon/",
          "stickied": false,
          "url": "https://v.redd.it/5b77a7opnkwg1",
          "subreddit_subscribers": 1715925,
          "created_utc": 1776789603,
          "num_crossposts": 32,
          "media": {
            "reddit_video": {
              "bitrate_kbps": 5000,
              "fallback_url": "https://v.redd.it/5b77a7opnkwg1/CMAF_1080.mp4?source=fallback",
              "has_audio": true,
              "height": 1920,
              "width": 1080,
              "scrubber_media_url": "https://v.redd.it/5b77a7opnkwg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/5b77a7opnkwg1/DASHPlaylist.mpd?a=1779445358%2CMDY5OTNkM2EzNjU0NGU2YzFmYjkyZjFlNjQ0YTgyM2U5MDJmM2M4ZjM1MTIzMDM5NTFmZDEwMTg1MWQ1YTVlNQ%3D%3D&amp;v=1&amp;f=sd",
              "duration": 53,
              "hls_url": "https://v.redd.it/5b77a7opnkwg1/HLSPlaylist.m3u8?a=1779445358%2CMGMxNDViMzZhMjFhNjg3MjQ0MmQ4YzAzZTNiMmI3ZDJhNzVmMjkzYWVmZWU3OGJiMDFiZGUzM2Y1NmNmNzZkMw%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_video": true
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "jobs",
          "selftext": "I've been job hunting for months now, and after dealing with endless ghosting, you start getting genuinely desperate when an interview finally lands on your calendar. I got a call scheduled for a mid-level role at a company that seemed decent on paper. I researched them, prepped my answers, logged onto the video call early, and we started chatting.\n\nAbout five minutes in, the recruiter asked about my salary expectations. I gave a completely standard, market-rate range based on my experience. The guy literally chuckled, leaned back in his chair, and said, \"That's a cute number, but we prefer to hire people who are driven by the mission, not the paycheck. We expect 50-hour weeks, but the base rate is non-negotiable.\"\n\nI just sat there stunned, genuinely thinking he was testing my negotiation skills or making a weird joke. I asked if there was equity or bonuses to offset the lower base and the extra hours. He just smiled and said, \"No, just the opportunity to work with a rockstar team.\"\n\nI politely said, \"I don't think our expectations align, thank you for your time,\" and just hit the 'leave meeting' button. Now I'm sitting here staring at my screen second-guessing myself. The market is so brutal right now, maybe I should've just swallowed my pride and tried to negotiate, but I just don't have the energy to talk myself into glaring red flags anymore.\n\nHas anyone else just completely lost their patience and walked out of an interview like this? At what point do you just say no?\n\n  \nEDIT: Didn’t expect this post to blow up. Thanks for all the encouraging words, everyone. For those asking how I’m getting by, I’m living with my parents for now until I find a job. It’s a tough time for job seekers right now, and I hope things get better for everyone out there.",
          "author_fullname": "t2_5vfghkv7",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "The recruiter called my salary expectations \"cute.\" I ended the Zoom call right there. Did I overreact?",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "Interviews"
            }
          ],
          "subreddit_name_prefixed": "r/jobs",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "",
          "downs": 0,
          "thumbnail_height": null,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1sroszd",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.88,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 21786,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": null,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Interviews",
          "can_mod_post": false,
          "score": 21786,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "self",
          "edited": 1776805551,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "content_categories": null,
          "is_self": true,
          "mod_note": null,
          "created": 1776780625,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "self.jobs",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;I&amp;#39;ve been job hunting for months now, and after dealing with endless ghosting, you start getting genuinely desperate when an interview finally lands on your calendar. I got a call scheduled for a mid-level role at a company that seemed decent on paper. I researched them, prepped my answers, logged onto the video call early, and we started chatting.&lt;/p&gt;\n\n&lt;p&gt;About five minutes in, the recruiter asked about my salary expectations. I gave a completely standard, market-rate range based on my experience. The guy literally chuckled, leaned back in his chair, and said, &amp;quot;That&amp;#39;s a cute number, but we prefer to hire people who are driven by the mission, not the paycheck. We expect 50-hour weeks, but the base rate is non-negotiable.&amp;quot;&lt;/p&gt;\n\n&lt;p&gt;I just sat there stunned, genuinely thinking he was testing my negotiation skills or making a weird joke. I asked if there was equity or bonuses to offset the lower base and the extra hours. He just smiled and said, &amp;quot;No, just the opportunity to work with a rockstar team.&amp;quot;&lt;/p&gt;\n\n&lt;p&gt;I politely said, &amp;quot;I don&amp;#39;t think our expectations align, thank you for your time,&amp;quot; and just hit the &amp;#39;leave meeting&amp;#39; button. Now I&amp;#39;m sitting here staring at my screen second-guessing myself. The market is so brutal right now, maybe I should&amp;#39;ve just swallowed my pride and tried to negotiate, but I just don&amp;#39;t have the energy to talk myself into glaring red flags anymore.&lt;/p&gt;\n\n&lt;p&gt;Has anyone else just completely lost their patience and walked out of an interview like this? At what point do you just say no?&lt;/p&gt;\n\n&lt;p&gt;EDIT: Didn’t expect this post to blow up. Thanks for all the encouraging words, everyone. For those asking how I’m getting by, I’m living with my parents for now until I find a job. It’s a tough time for job seekers right now, and I hope things get better for everyone out there.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": "confidence",
          "banned_at_utc": null,
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "dc491ca2-05ab-11e6-97de-0ec36f9f170d",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2qhnd",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1sroszd",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "thunder____boy",
          "discussion_type": null,
          "num_comments": 2950,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/jobs/comments/1sroszd/the_recruiter_called_my_salary_expectations_cute/",
          "stickied": false,
          "url": "https://www.reddit.com/r/jobs/comments/1sroszd/the_recruiter_called_my_salary_expectations_cute/",
          "subreddit_subscribers": 2617757,
          "created_utc": 1776780625,
          "num_crossposts": 9,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "malelivingspace",
          "selftext": "This is where i live, with a dog. Oceanic and mountainous view. \n\nConstructive criticism on everything but the dog is more than welcome, only positive comments about the dog please and thank you. Im not 100% finished with everything but its certainly getting there. My dog loves to photobomb.",
          "author_fullname": "t2_4p3nciy5",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "is_gallery": true,
          "title": "27 (Male) sucks at taking photos. Living alone with dog.",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/malelivingspace",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 105,
          "top_awarded_type": null,
          "hide_score": false,
          "media_metadata": {
            "4f9xqj3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=4074ee51cbc9f4c8d6c33758da2f310267eff4e0"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=27db0b647076327d8b889a554ff1dc153c8d1a32"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=093ff2afc1cc4562439e8461fe37813ad85e1738"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=cd587417981be0198d24fe3729667f47d2d3649d"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=5e0eeb3431095b77a93e60a1dcbcc49c360623c7"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=90b023a938099729fb76e7ee9c1fa5f1e0ef1987"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=1bee6551a16ba79359d4809668f8ca949aeeb024"
              },
              "id": "4f9xqj3nslwg1"
            },
            "8dtx8o3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/8dtx8o3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=08db33b966cc04427f495f6d649f94deaed764f2"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/8dtx8o3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=423704f1d5cdccaddcb3bf3315170ba3b12e2fb0"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/8dtx8o3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=7672506d3bcb54a45b3337c0c6431358cbef9fed"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/8dtx8o3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=116c8f8bab2127790f3bf1958b3fbb65e420ac68"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/8dtx8o3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=acc24dadcddbcb64345f2ed388594818428f056a"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/8dtx8o3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=ae91f0428aed80265e559ce9bed81fbf5780f194"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/8dtx8o3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=5601b4615f565234026eca3a7d65eb1873fabb85"
              },
              "id": "8dtx8o3nslwg1"
            },
            "lik6yg3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/lik6yg3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=3a9cd3c2dc31d39af9cea42a37048e4e6c91617a"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/lik6yg3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=8c4b852792cc2d0d4b2c1f76b39f0b0bd46793ad"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/lik6yg3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=71932df430bcd541b4bf55c67a49cbd29ac574b2"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/lik6yg3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=2d49d194fa45283af3b34f3d2149233ac1960965"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/lik6yg3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=54faaf19327b3c910d3b6e6a412ad8f24a58a79c"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/lik6yg3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=ec84a372d1ecfffdd93b473599a05cbc87bde8be"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/lik6yg3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=bd48e8095eb4e566beb74c4d392852d0af95ec5a"
              },
              "id": "lik6yg3nslwg1"
            },
            "9qcjdh3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/9qcjdh3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=3fc246b8895b0cc0bd2ba76f1315ffd4689e15c0"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/9qcjdh3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=a6b173785ac5bbffcdf013011bd1be01627b10ec"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/9qcjdh3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d9da48d83951db52113ad4755d09e7bf63ff1740"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/9qcjdh3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=a702b28eb6919ae89352372b5ce5527da06c8cd4"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/9qcjdh3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=3eed1305849bb790d732048d0de9a12d4b2577f6"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/9qcjdh3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=da8416fbb03b8da28b887ad34ffb30bd024859c7"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/9qcjdh3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=4affc19cc3e596fd7a8629a28d1a89c7d29a92e7"
              },
              "id": "9qcjdh3nslwg1"
            },
            "4845dh3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/4845dh3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=35b3038f8ead8c358c08283a45b21dce700f658b"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/4845dh3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=0968af95a67c91411e7fbd856a64072543d4ed08"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/4845dh3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=1f62bfb030a74eddcc717f3508ef862801f13ac7"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/4845dh3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=a7501a4a1ed7a19aa33900124d77ac0d5dde76b0"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/4845dh3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=ecc33bc0eb372fbe92cfd277b7ca9db420bbc098"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/4845dh3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=8a18d9f79996f44d72b4510e74e8a97e36540ecf"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/4845dh3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=0c924e42259dc2a4bdb229e89fc408b4e390efef"
              },
              "id": "4845dh3nslwg1"
            },
            "i4r45k3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/i4r45k3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=a65467309696f67df6fa605348c321a10806c4c5"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/i4r45k3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=f44797c7a9b0665bae5d8c5d9a8270c1915bb789"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/i4r45k3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d9c50434110867ad64a060703be512963e63b38f"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/i4r45k3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=fcf052a2b15ec2b8d034c78ba41189566d93c2a5"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/i4r45k3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=538a15518277b98ae2fe0391deb7ef1d39e0c29f"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/i4r45k3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=10286b4d54aa6c4aa4106fe604a00a1286d9c102"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/i4r45k3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=32ad372aab265e5ea2c38c7a0aec2993ec7b0253"
              },
              "id": "i4r45k3nslwg1"
            },
            "kvkhxg3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/kvkhxg3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=b1fe8b1e75d8a4e65aac49090e174afa65cb1d5d"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/kvkhxg3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=18954e1b3fb76834356e82260cb997b0aef90614"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/kvkhxg3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=50838eb63ce497963dc1208dc22eec3cb3cf3e97"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/kvkhxg3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=8e6fc12e1e4a87c9a8620ca8437549fdc8aedbce"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/kvkhxg3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=a8adfb89a3183de9c56160477c4ea9781a8c45f7"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/kvkhxg3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=fafff3227b24d69b30c5ef0a74c79adefa60fd39"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/kvkhxg3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=1e80f07feae2baaf3cfccb3aba183fd70165bb88"
              },
              "id": "kvkhxg3nslwg1"
            },
            "fzrxro3nslwg1": {
              "status": "valid",
              "e": "Image",
              "m": "image/jpg",
              "p": [
                {
                  "y": 81,
                  "x": 108,
                  "u": "https://preview.redd.it/fzrxro3nslwg1.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=76a8fb04f9174cda45c92fe6ac072cb1573cedd6"
                },
                {
                  "y": 162,
                  "x": 216,
                  "u": "https://preview.redd.it/fzrxro3nslwg1.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=460d7705a88b54b07f03772d6f891da686d0e1ca"
                },
                {
                  "y": 240,
                  "x": 320,
                  "u": "https://preview.redd.it/fzrxro3nslwg1.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=1d5fc4b7ca183291d45cc73386d8e4225ef80846"
                },
                {
                  "y": 480,
                  "x": 640,
                  "u": "https://preview.redd.it/fzrxro3nslwg1.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=36847d6cfb56180559ef226a8f62aa0afaf9ad2d"
                },
                {
                  "y": 720,
                  "x": 960,
                  "u": "https://preview.redd.it/fzrxro3nslwg1.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=a5c66ac6ac5473ee5ef2b3b2cdf5bcf0df2d18cd"
                },
                {
                  "y": 810,
                  "x": 1080,
                  "u": "https://preview.redd.it/fzrxro3nslwg1.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=560bb49f070b7ca246772b3406a1720c84225ad7"
                }
              ],
              "s": {
                "y": 3024,
                "x": 4032,
                "u": "https://preview.redd.it/fzrxro3nslwg1.jpg?width=4032&amp;format=pjpg&amp;auto=webp&amp;s=4f8fa94f1cc855f12aec96a1af97a9e0077791a0"
              },
              "id": "fzrxro3nslwg1"
            }
          },
          "name": "t3_1srzrat",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.92,
          "author_flair_background_color": null,
          "ups": 41001,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "gallery_data": {
            "items": [
              {
                "media_id": "4f9xqj3nslwg1",
                "is_deleted": false,
                "id": 918206941
              },
              {
                "media_id": "4845dh3nslwg1",
                "is_deleted": false,
                "id": 918206942
              },
              {
                "media_id": "lik6yg3nslwg1",
                "is_deleted": false,
                "id": 918206943
              },
              {
                "media_id": "kvkhxg3nslwg1",
                "is_deleted": false,
                "id": 918206944
              },
              {
                "media_id": "i4r45k3nslwg1",
                "is_deleted": false,
                "id": 918206945
              },
              {
                "media_id": "9qcjdh3nslwg1",
                "is_deleted": false,
                "id": 918206946
              },
              {
                "media_id": "8dtx8o3nslwg1",
                "is_deleted": false,
                "id": 918206947
              },
              {
                "media_id": "fzrxro3nslwg1",
                "is_deleted": false,
                "id": 918206948
              }
            ]
          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 41001,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/4f9xqj3nslwg1.jpg?width=140&amp;height=105&amp;auto=webp&amp;s=5e2003c0c0d6c23ee5426dfbd219bb67aba5a433",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776803366,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "reddit.com",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;This is where i live, with a dog. Oceanic and mountainous view. &lt;/p&gt;\n\n&lt;p&gt;Constructive criticism on everything but the dog is more than welcome, only positive comments about the dog please and thank you. Im not 100% finished with everything but its certainly getting there. My dog loves to photobomb.&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://www.reddit.com/gallery/1srzrat",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2v70p",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1srzrat",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "NeFa_NO",
          "discussion_type": null,
          "num_comments": 2912,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/malelivingspace/comments/1srzrat/27_male_sucks_at_taking_photos_living_alone_with/",
          "stickied": false,
          "url": "https://www.reddit.com/gallery/1srzrat",
          "subreddit_subscribers": 2878967,
          "created_utc": 1776803366,
          "num_crossposts": 8,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "politics",
          "selftext": "",
          "author_fullname": "t2_3x3odpf",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Tucker Carlson Apologizes For Endorsing Trump: ‘I’m Sorry For Misleading People’",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "No Paywall"
            }
          ],
          "subreddit_name_prefixed": "r/politics",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 93,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1srrbeu",
          "quarantine": false,
          "link_flair_text_color": null,
          "upvote_ratio": 0.91,
          "author_flair_background_color": null,
          "ups": 29654,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "No Paywall",
          "can_mod_post": false,
          "score": 29654,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://external-preview.redd.it/C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM.jpeg?width=140&amp;height=93&amp;auto=webp&amp;s=66cece0b2526da0eff1e0a038f30d7a5bde5a9ae",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "link",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776785819,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "ijr.com",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://ijr.com/tucker-carlson-apologizes-for-endorsing-trump-im-sorry-for-misleading-people/",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM.jpeg?auto=webp&amp;s=8a3485fef83010599e04836b0dcbc36de7fd47a5",
                  "width": 1024,
                  "height": 683
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=903d237b03d2ccc81a7e706cbedacc87e3d2a3b7",
                    "width": 108,
                    "height": 72
                  },
                  {
                    "url": "https://external-preview.redd.it/C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=9d40dd64c35f0f476173904ff3c5355fea3b6185",
                    "width": 216,
                    "height": 144
                  },
                  {
                    "url": "https://external-preview.redd.it/C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=b778695ecd585fe4bbd77b39839cd690b99ce8b3",
                    "width": 320,
                    "height": 213
                  },
                  {
                    "url": "https://external-preview.redd.it/C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=8dceda5aea653f47b4a67dd6f071596ce0e1ba33",
                    "width": 640,
                    "height": 426
                  },
                  {
                    "url": "https://external-preview.redd.it/C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=e22c3bb82a369cdd25d848bdb738e6a9b743bf66",
                    "width": 960,
                    "height": 640
                  }
                ],
                "variants": {

                },
                "id": "C4eIQQGo25jmOz4Z7_WsJ46vLqJ4puYLL7KssQo-qEM"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "ff393144-9e39-11f0-acf2-f27090aab25c",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2cneq",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#34cb5c",
          "id": "1srrbeu",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "unital_subalgebra",
          "discussion_type": null,
          "num_comments": 2597,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/politics/comments/1srrbeu/tucker_carlson_apologizes_for_endorsing_trump_im/",
          "stickied": false,
          "url": "https://ijr.com/tucker-carlson-apologizes-for-endorsing-trump-im-sorry-for-misleading-people/",
          "subreddit_subscribers": 9129949,
          "created_utc": 1776785819,
          "num_crossposts": 12,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "nba",
          "selftext": "",
          "author_fullname": "t2_8zaei",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "[Highlight] Lebron James turns back time with the double pump reverse jam!",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "Highlight"
            }
          ],
          "subreddit_name_prefixed": "r/nba",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "highlights",
          "downs": 0,
          "thumbnail_height": 78,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ssat74",
          "quarantine": false,
          "link_flair_text_color": "light",
          "upvote_ratio": 0.98,
          "author_flair_background_color": "",
          "ups": 8523,
          "total_awards_received": 0,
          "media_embed": {
            "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2F4vw1j3&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2F4vw1j3&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2F4vw1j3.jpg%3FExpires%3D1776838368344%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ%26Signature%3Dl2G-lJrGcxnbRgi2NYti-a5kKzbUI1aqj3clbRngkIC5SffHdUn97qmsFMHnW3gbe3eVHoizDJL361gnn4kKTEe03OFfT0owl-9We8lwUTfhLki-1OLiotAlZP1RSVyRzak-YxPVgDd4yoCJuh3p3nj%7E6FPzXBwSAMU7HVVnvuQbblT6jYH1DQjq9e-DHDTC9iJrLACtvr-M-AbOIsWa6BVjQiHrIIxOGTZ2tT1okqfugBJUTiDX%7EMcE3cs8Y9qtPmCK%7EPq8YUAJXnmMt-eTMtwYL2QTYUgOytdDOI1FS8Rcoa4L2KfKdshHEhhPS3%7EBkljh2uJ-SrsmiDlJbaGmqQ__&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"600\" height=\"338\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "width": 600,
            "scrolling": false,
            "height": 338
          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": {
            "oembed": {
              "provider_url": "https://streamable.com",
              "description": "Watch \"2026-04-22 00-12-13\" on Streamable.",
              "title": "2026-04-22 00-12-13",
              "thumbnail_width": 1280,
              "height": 338,
              "width": 600,
              "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2F4vw1j3&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2F4vw1j3&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2F4vw1j3.jpg%3FExpires%3D1776838368344%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ%26Signature%3Dl2G-lJrGcxnbRgi2NYti-a5kKzbUI1aqj3clbRngkIC5SffHdUn97qmsFMHnW3gbe3eVHoizDJL361gnn4kKTEe03OFfT0owl-9We8lwUTfhLki-1OLiotAlZP1RSVyRzak-YxPVgDd4yoCJuh3p3nj%7E6FPzXBwSAMU7HVVnvuQbblT6jYH1DQjq9e-DHDTC9iJrLACtvr-M-AbOIsWa6BVjQiHrIIxOGTZ2tT1okqfugBJUTiDX%7EMcE3cs8Y9qtPmCK%7EPq8YUAJXnmMt-eTMtwYL2QTYUgOytdDOI1FS8Rcoa4L2KfKdshHEhhPS3%7EBkljh2uJ-SrsmiDlJbaGmqQ__&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"600\" height=\"338\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
              "version": "1.0",
              "provider_name": "Streamable",
              "thumbnail_url": "https://cdn-cf-east.streamable.com/image/4vw1j3.jpg?Expires=1776838368344&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&amp;Signature=l2G-lJrGcxnbRgi2NYti-a5kKzbUI1aqj3clbRngkIC5SffHdUn97qmsFMHnW3gbe3eVHoizDJL361gnn4kKTEe03OFfT0owl-9We8lwUTfhLki-1OLiotAlZP1RSVyRzak-YxPVgDd4yoCJuh3p3nj~6FPzXBwSAMU7HVVnvuQbblT6jYH1DQjq9e-DHDTC9iJrLACtvr-M-AbOIsWa6BVjQiHrIIxOGTZ2tT1okqfugBJUTiDX~McE3cs8Y9qtPmCK~Pq8YUAJXnmMt-eTMtwYL2QTYUgOytdDOI1FS8Rcoa4L2KfKdshHEhhPS3~Bkljh2uJ-SrsmiDlJbaGmqQ__",
              "type": "video",
              "thumbnail_height": 720
            },
            "type": "streamable.com"
          },
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {
            "content": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2F4vw1j3&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2F4vw1j3&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2F4vw1j3.jpg%3FExpires%3D1776838368344%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ%26Signature%3Dl2G-lJrGcxnbRgi2NYti-a5kKzbUI1aqj3clbRngkIC5SffHdUn97qmsFMHnW3gbe3eVHoizDJL361gnn4kKTEe03OFfT0owl-9We8lwUTfhLki-1OLiotAlZP1RSVyRzak-YxPVgDd4yoCJuh3p3nj%7E6FPzXBwSAMU7HVVnvuQbblT6jYH1DQjq9e-DHDTC9iJrLACtvr-M-AbOIsWa6BVjQiHrIIxOGTZ2tT1okqfugBJUTiDX%7EMcE3cs8Y9qtPmCK%7EPq8YUAJXnmMt-eTMtwYL2QTYUgOytdDOI1FS8Rcoa4L2KfKdshHEhhPS3%7EBkljh2uJ-SrsmiDlJbaGmqQ__&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"600\" height=\"338\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
            "width": 600,
            "scrolling": false,
            "media_domain_url": "https://www.redditmedia.com/mediaembed/1ssat74",
            "height": 338
          },
          "link_flair_text": "Highlight",
          "can_mod_post": false,
          "score": 8523,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?width=140&amp;height=78&amp;auto=webp&amp;s=c12ff417d17ed402b6d7fcc7269dd5743f7cc991",
          "edited": false,
          "author_flair_css_class": "Celtics1",
          "author_flair_richtext": [
            {
              "e": "text",
              "t": "Celtics"
            }
          ],
          "gildings": {

          },
          "post_hint": "rich:video",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776831168,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "richtext",
          "domain": "streamable.com",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://streamable.com/4vw1j3",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?auto=webp&amp;s=2633be56ff7e85e15b161822a3cdb39dffb5c8e9",
                  "width": 1280,
                  "height": 720
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=2a5d1f7d99c4410afe30c6c3620b192dba051333",
                    "width": 108,
                    "height": 60
                  },
                  {
                    "url": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=2afa6b390eebe617aa1617f276c2399e83f9f507",
                    "width": 216,
                    "height": 121
                  },
                  {
                    "url": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=0e1ce7e9232f2a5017bbc047a38a9cf476324bb7",
                    "width": 320,
                    "height": 180
                  },
                  {
                    "url": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=c3b6b36eb69df782d430cc6b99e8937b5d9798f3",
                    "width": 640,
                    "height": 360
                  },
                  {
                    "url": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=e321f2e94bacef3637052d1e6340dcf9b1a04370",
                    "width": 960,
                    "height": 540
                  },
                  {
                    "url": "https://external-preview.redd.it/2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=a576cfb6a4911c4be77d4c39414b51587ff13c8c",
                    "width": 1080,
                    "height": 607
                  }
                ],
                "variants": {

                },
                "id": "2BFAxqq2js3dIdafHgUKGv2d14QmpXRuoUJNdVIkTMc"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "11e1d3fc-5c54-11e4-8ccc-12313b0e448d",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": "Celtics",
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2qo4s",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#0079d3",
          "id": "1ssat74",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "fbreaker",
          "discussion_type": null,
          "num_comments": 523,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": "dark",
          "permalink": "/r/nba/comments/1ssat74/highlight_lebron_james_turns_back_time_with_the/",
          "stickied": false,
          "url": "https://streamable.com/4vw1j3",
          "subreddit_subscribers": 17037644,
          "created_utc": 1776831168,
          "num_crossposts": 6,
          "media": {
            "oembed": {
              "provider_url": "https://streamable.com",
              "description": "Watch \"2026-04-22 00-12-13\" on Streamable.",
              "title": "2026-04-22 00-12-13",
              "thumbnail_width": 1280,
              "height": 338,
              "width": 600,
              "html": "&lt;iframe class=\"embedly-embed\" src=\"https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fstreamable.com%2Fo%2F4vw1j3&amp;display_name=Streamable&amp;url=https%3A%2F%2Fstreamable.com%2F4vw1j3&amp;image=https%3A%2F%2Fcdn-cf-east.streamable.com%2Fimage%2F4vw1j3.jpg%3FExpires%3D1776838368344%26Key-Pair-Id%3DAPKAIEYUVEN4EVB2OKEQ%26Signature%3Dl2G-lJrGcxnbRgi2NYti-a5kKzbUI1aqj3clbRngkIC5SffHdUn97qmsFMHnW3gbe3eVHoizDJL361gnn4kKTEe03OFfT0owl-9We8lwUTfhLki-1OLiotAlZP1RSVyRzak-YxPVgDd4yoCJuh3p3nj%7E6FPzXBwSAMU7HVVnvuQbblT6jYH1DQjq9e-DHDTC9iJrLACtvr-M-AbOIsWa6BVjQiHrIIxOGTZ2tT1okqfugBJUTiDX%7EMcE3cs8Y9qtPmCK%7EPq8YUAJXnmMt-eTMtwYL2QTYUgOytdDOI1FS8Rcoa4L2KfKdshHEhhPS3%7EBkljh2uJ-SrsmiDlJbaGmqQ__&amp;type=text%2Fhtml&amp;schema=streamable\" width=\"600\" height=\"338\" scrolling=\"no\" title=\"Streamable embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"&gt;&lt;/iframe&gt;",
              "version": "1.0",
              "provider_name": "Streamable",
              "thumbnail_url": "https://cdn-cf-east.streamable.com/image/4vw1j3.jpg?Expires=1776838368344&amp;Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&amp;Signature=l2G-lJrGcxnbRgi2NYti-a5kKzbUI1aqj3clbRngkIC5SffHdUn97qmsFMHnW3gbe3eVHoizDJL361gnn4kKTEe03OFfT0owl-9We8lwUTfhLki-1OLiotAlZP1RSVyRzak-YxPVgDd4yoCJuh3p3nj~6FPzXBwSAMU7HVVnvuQbblT6jYH1DQjq9e-DHDTC9iJrLACtvr-M-AbOIsWa6BVjQiHrIIxOGTZ2tT1okqfugBJUTiDX~McE3cs8Y9qtPmCK~Pq8YUAJXnmMt-eTMtwYL2QTYUgOytdDOI1FS8Rcoa4L2KfKdshHEhhPS3~Bkljh2uJ-SrsmiDlJbaGmqQ__",
              "type": "video",
              "thumbnail_height": 720
            },
            "type": "streamable.com"
          },
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "news",
          "selftext": "",
          "author_fullname": "t2_1oauw7s773",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "At least 10 scientists tied to sensitive US research have died or disappeared in recent years, sparking federal investigation",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/news",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 78,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss8rxp",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.94,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 12636,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 12636,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "default",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "link",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776825501,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "cnn.com",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://www.cnn.com/2026/04/21/us/deaths-disappearances-scientists-investigation",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/H3mfNm5d-E4sTeo4g1eD8XqRnRKlM1aWXA5rff66pHs.jpeg?auto=webp&amp;s=1728489def2df3e503566f4153d58e68f88aa68d",
                  "width": 800,
                  "height": 450
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/H3mfNm5d-E4sTeo4g1eD8XqRnRKlM1aWXA5rff66pHs.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=9b38da0967f3de5df152d2663dbb2ac9fb046652",
                    "width": 108,
                    "height": 60
                  },
                  {
                    "url": "https://external-preview.redd.it/H3mfNm5d-E4sTeo4g1eD8XqRnRKlM1aWXA5rff66pHs.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=0c7bd9a42afbb0a64ee46e6b670f29601f39cd60",
                    "width": 216,
                    "height": 121
                  },
                  {
                    "url": "https://external-preview.redd.it/H3mfNm5d-E4sTeo4g1eD8XqRnRKlM1aWXA5rff66pHs.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=47d168f4c4759c94db98ef5ec16ed7e92d0d427a",
                    "width": 320,
                    "height": 180
                  },
                  {
                    "url": "https://external-preview.redd.it/H3mfNm5d-E4sTeo4g1eD8XqRnRKlM1aWXA5rff66pHs.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=b755ad08fc5c92edd7ef52fdc706e3d5ce3bb6f8",
                    "width": 640,
                    "height": 360
                  }
                ],
                "variants": {

                },
                "id": "H3mfNm5d-E4sTeo4g1eD8XqRnRKlM1aWXA5rff66pHs"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2qh3l",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1ss8rxp",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "igetproteinfartsHELP",
          "discussion_type": null,
          "num_comments": 543,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/news/comments/1ss8rxp/at_least_10_scientists_tied_to_sensitive_us/",
          "stickied": false,
          "url": "https://www.cnn.com/2026/04/21/us/deaths-disappearances-scientists-investigation",
          "subreddit_subscribers": 31341131,
          "created_utc": 1776825501,
          "num_crossposts": 7,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "news",
          "selftext": "",
          "author_fullname": "t2_gx1fs",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "US military service members will no longer be required to get annual flu shot",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/news",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 73,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1srs380",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.94,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 20280,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 20280,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "default",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "link",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776787424,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "theguardian.com",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://www.theguardian.com/us-news/2026/apr/21/military-flu-shot-requirement-pete-hegseth",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM.jpeg?auto=webp&amp;s=b89db610a521c97bdd49fd708e7391da18dd49f2",
                  "width": 1200,
                  "height": 630
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=b1d12f34810b40b81b21bdb802cbedf0a5994e86",
                    "width": 108,
                    "height": 56
                  },
                  {
                    "url": "https://external-preview.redd.it/BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=b47acb999a72bf046e073894d652c8857e889328",
                    "width": 216,
                    "height": 113
                  },
                  {
                    "url": "https://external-preview.redd.it/BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=e60ed48377641919a6789cfb28172f8cf35eab20",
                    "width": 320,
                    "height": 168
                  },
                  {
                    "url": "https://external-preview.redd.it/BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=2c22eb1ba8337ee89e66e7e08bdda8736beedc44",
                    "width": 640,
                    "height": 336
                  },
                  {
                    "url": "https://external-preview.redd.it/BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=33dcad70c7feb48be28e3a6ecab71e3568c86cff",
                    "width": 960,
                    "height": 504
                  },
                  {
                    "url": "https://external-preview.redd.it/BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=ba3903c2475b68d28503630385d66330a7523ee2",
                    "width": 1080,
                    "height": 567
                  }
                ],
                "variants": {

                },
                "id": "BewkKPL4wvMo9IttjSb_OpWSkDV06uHxRJKHdEwHbZM"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2qh3l",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1srs380",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "untamedlazyeye",
          "discussion_type": null,
          "num_comments": 2539,
          "send_replies": false,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/news/comments/1srs380/us_military_service_members_will_no_longer_be/",
          "stickied": false,
          "url": "https://www.theguardian.com/us-news/2026/apr/21/military-flu-shot-requirement-pete-hegseth",
          "subreddit_subscribers": 31341131,
          "created_utc": 1776787424,
          "num_crossposts": 6,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "Unexpected",
          "selftext": "",
          "author_fullname": "t2_5hyif43q",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Pool anyone?",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/Unexpected",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1sse3mx",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.91,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 4619,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": {
            "reddit_video": {
              "bitrate_kbps": 800,
              "fallback_url": "https://v.redd.it/rqc83j41zowg1/CMAF_360.mp4?source=fallback",
              "has_audio": true,
              "height": 640,
              "width": 360,
              "scrubber_media_url": "https://v.redd.it/rqc83j41zowg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/rqc83j41zowg1/DASHPlaylist.mpd?a=1779445358%2CYjZkNzZlMWJiY2I1MzNkNTRjN2VhYWI2ZWI4NGY0ODIzYTAxMTE1ZTY4MTA3MmRkNGQ5ZmM3Yjg4OGUyMzVhMw%3D%3D&amp;v=1&amp;f=sd",
              "duration": 6,
              "hls_url": "https://v.redd.it/rqc83j41zowg1/HLSPlaylist.m3u8?a=1779445358%2CY2Y5NmU4MjYzOTczNjUxOTQ0MWQyYTM3ODNlNDNlZTNkYzZjN2Y2MmQ5YzBkNjk0ZDE0OGFlNjcxNjE2NzVkMQ%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 4619,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "default",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "hosted:video",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776841835,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "v.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": "confidence",
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://v.redd.it/rqc83j41zowg1",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/NjBhb2tyNDF6b3dnMTHPIVbRUVVC4uweTFazQf71Ik9XjRO9IE2AiKHypWBT.png?format=pjpg&amp;auto=webp&amp;s=a7e1e951a13f798235db4090ab33da94fe39376e",
                  "width": 360,
                  "height": 640
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/NjBhb2tyNDF6b3dnMTHPIVbRUVVC4uweTFazQf71Ik9XjRO9IE2AiKHypWBT.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=d06391d6dcf1e575e47628ab67bca5a9a265e676",
                    "width": 108,
                    "height": 192
                  },
                  {
                    "url": "https://external-preview.redd.it/NjBhb2tyNDF6b3dnMTHPIVbRUVVC4uweTFazQf71Ik9XjRO9IE2AiKHypWBT.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=6cfd4c2eab9f904361b56920b22f123be632dad3",
                    "width": 216,
                    "height": 384
                  },
                  {
                    "url": "https://external-preview.redd.it/NjBhb2tyNDF6b3dnMTHPIVbRUVVC4uweTFazQf71Ik9XjRO9IE2AiKHypWBT.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=567c0853767ea9553e9d73e1eb858bc8b11fabb7",
                    "width": 320,
                    "height": 568
                  }
                ],
                "variants": {

                },
                "id": "NjBhb2tyNDF6b3dnMTHPIVbRUVVC4uweTFazQf71Ik9XjRO9IE2AiKHypWBT"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2w67q",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1sse3mx",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "Captain_Bushcraft",
          "discussion_type": null,
          "num_comments": 81,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/Unexpected/comments/1sse3mx/pool_anyone/",
          "stickied": false,
          "url": "https://v.redd.it/rqc83j41zowg1",
          "subreddit_subscribers": 11896185,
          "created_utc": 1776841835,
          "num_crossposts": 6,
          "media": {
            "reddit_video": {
              "bitrate_kbps": 800,
              "fallback_url": "https://v.redd.it/rqc83j41zowg1/CMAF_360.mp4?source=fallback",
              "has_audio": true,
              "height": 640,
              "width": 360,
              "scrubber_media_url": "https://v.redd.it/rqc83j41zowg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/rqc83j41zowg1/DASHPlaylist.mpd?a=1779445358%2CYjZkNzZlMWJiY2I1MzNkNTRjN2VhYWI2ZWI4NGY0ODIzYTAxMTE1ZTY4MTA3MmRkNGQ5ZmM3Yjg4OGUyMzVhMw%3D%3D&amp;v=1&amp;f=sd",
              "duration": 6,
              "hls_url": "https://v.redd.it/rqc83j41zowg1/HLSPlaylist.m3u8?a=1779445358%2CY2Y5NmU4MjYzOTczNjUxOTQ0MWQyYTM3ODNlNDNlZTNkYzZjN2Y2MmQ5YzBkNjk0ZDE0OGFlNjcxNjE2NzVkMQ%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_video": true
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "Fauxmoi",
          "selftext": "",
          "author_fullname": "t2_1h4coeopfd",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Barack Obama congratulated Virginia Voters after the state’s redistricting referendum has passed.",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/Fauxmoi",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 84,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss6zgb",
          "quarantine": false,
          "link_flair_text_color": "light",
          "upvote_ratio": 0.97,
          "author_flair_background_color": null,
          "ups": 18043,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "APPROVED B-LISTERS",
          "can_mod_post": false,
          "score": 18043,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?width=140&amp;height=84&amp;auto=webp&amp;s=58c903d5631302ddd318c5f6a4b4238160b98fc8",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776820770,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": "top",
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/d7b75w9e8nwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?auto=webp&amp;s=d130b09205238d91fcb914d2c4c7bd5510b447d1",
                  "width": 1170,
                  "height": 702
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=1ef0c60df18047ed88904e19bc29704228c3cd33",
                    "width": 108,
                    "height": 64
                  },
                  {
                    "url": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=e563530334110fdcc4e82edbb1c4e03a7244c701",
                    "width": 216,
                    "height": 129
                  },
                  {
                    "url": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=1ac2e488e3229d9bff432813187fa8494746482c",
                    "width": 320,
                    "height": 192
                  },
                  {
                    "url": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=8b9a913a1129c34f9e37b0ad8a7d9c9ec37f57d1",
                    "width": 640,
                    "height": 384
                  },
                  {
                    "url": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=6171b3f87bf1a72844da6777421300d40de1ceb9",
                    "width": 960,
                    "height": 576
                  },
                  {
                    "url": "https://preview.redd.it/d7b75w9e8nwg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=0caffb6e4dde21f977f633075a4c34b96c08ca79",
                    "width": 1080,
                    "height": 648
                  }
                ],
                "variants": {

                },
                "id": "d7b75w9e8nwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "0467d69a-d6d8-11ef-a9ba-16ae90dacafd",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2rqcm8",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#ff0572",
          "id": "1ss6zgb",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "icey_sawg0034",
          "discussion_type": null,
          "num_comments": 161,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/Fauxmoi/comments/1ss6zgb/barack_obama_congratulated_virginia_voters_after/",
          "stickied": false,
          "url": "https://i.redd.it/d7b75w9e8nwg1.jpeg",
          "subreddit_subscribers": 6716716,
          "created_utc": 1776820770,
          "num_crossposts": 7,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "spaceporn",
          "selftext": "TOI-1452 b is a confirmed super-Earth exoplanet, discovered in 2022, orbiting a red dwarf star ~100 light-years away in the Draco constellation. It is a prime candidate for an \"ocean world,\" with a mass ~5x Earth's and a radius ~70% larger, potentially covered by a thick liquid water ocean. It orbits within the habitable zone of its star. This specific illustration of TOI-1452 b is credited to NASA / JPL-Caltech",
          "author_fullname": "t2_2bto65ef82",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Imagine a planet bigger than Earth, with no land in sight. Just waves and water from pole to pole. That is TOI-1452 b.",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "NASA"
            }
          ],
          "subreddit_name_prefixed": "r/spaceporn",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "",
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1srrtib",
          "quarantine": false,
          "link_flair_text_color": "light",
          "upvote_ratio": 0.96,
          "author_flair_background_color": null,
          "ups": 27408,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "NASA",
          "can_mod_post": false,
          "score": 27408,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/6zcmccilfkwg1.jpeg?width=140&amp;height=140&amp;crop=1:1,smart&amp;auto=webp&amp;s=6f1f1d91f4b6897862e8db4ec1f8271e4d1130f3",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776786879,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;TOI-1452 b is a confirmed super-Earth exoplanet, discovered in 2022, orbiting a red dwarf star ~100 light-years away in the Draco constellation. It is a prime candidate for an &amp;quot;ocean world,&amp;quot; with a mass ~5x Earth&amp;#39;s and a radius ~70% larger, potentially covered by a thick liquid water ocean. It orbits within the habitable zone of its star. This specific illustration of TOI-1452 b is credited to NASA / JPL-Caltech&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/6zcmccilfkwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/6zcmccilfkwg1.jpeg?auto=webp&amp;s=f2a64054f0afcef4a0109146d6b9b6e10d0224d5",
                  "width": 1031,
                  "height": 1280
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/6zcmccilfkwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=c58c568419e492d832aa54c65439db8476a605dc",
                    "width": 108,
                    "height": 134
                  },
                  {
                    "url": "https://preview.redd.it/6zcmccilfkwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=e44a17ad866f937e1f46528908d6cd98fd37c91a",
                    "width": 216,
                    "height": 268
                  },
                  {
                    "url": "https://preview.redd.it/6zcmccilfkwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d7fd25d8c338d65696961c968473268e18d923db",
                    "width": 320,
                    "height": 397
                  },
                  {
                    "url": "https://preview.redd.it/6zcmccilfkwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=0798a4ad445f09703639cc4a17ee36c93c293e92",
                    "width": 640,
                    "height": 794
                  },
                  {
                    "url": "https://preview.redd.it/6zcmccilfkwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=584ef21716642b1b1ec5f16b402f1203a9bb5817",
                    "width": 960,
                    "height": 1191
                  }
                ],
                "variants": {

                },
                "id": "6zcmccilfkwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "18715cb2-f012-11ea-baea-0ee8abd657df",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2s9jc",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#0aa18f",
          "id": "1srrtib",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "SharedFeverr",
          "discussion_type": null,
          "num_comments": 2530,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/spaceporn/comments/1srrtib/imagine_a_planet_bigger_than_earth_with_no_land/",
          "stickied": false,
          "url": "https://i.redd.it/6zcmccilfkwg1.jpeg",
          "subreddit_subscribers": 4249447,
          "created_utc": 1776786879,
          "num_crossposts": 27,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "hungary",
          "selftext": "Lőrincz Viktóriát, Kaposvár és térsége megválasztott országgyűlési képviselőjét kértem fel a megalakuló TISZA-kormány terület- és vidékfejlesztési miniszterének, a Miniszterelnökség vezetésével pedig Ruff Bálintot bízom meg.  \n\n \n\nDr. Lőrincz Viktória a Somogy 01-es választókerületben nyert egyéni országgyűlési képviselői mandátumot. A kampány során bebizonyította, hogy kérlelhetetlen, nagy tudású, emberséges és szorgalmas hazafi, akinek korábbi önkormányzati és jogi tapasztalatai sokat segítenek majd abban, hogy ezt a kiemelt jelentőségű minisztériumot méltóképpen vezethesse. Viktóriával egyetértünk abban, hogy megkülönböztetett figyelmet kell fordítani a vidéki Magyarország támogatására, a helyi közösségek megerősítésére és a területi egyenlőtlenségek csökkentésére.\n\n \n\nKöszönöm dr. Ruff Bálintnak, hogy elfogadta a felkérésemet. Ő lesz a TISZA-kormányban a Miniszterelnökséget vezető miniszter. Az előtte és előttünk álló feladat egyszerűen, néhány szóban összefoglalható: a valódi rendszerváltás megvalósításáért felel és felelünk. Ruff Bálint nevét a magyar nyilvánosság elsősorban közéleti tevékenysége miatt ismeri, számomra kiemelten fontos emellett kiterjedt közigazgatási tapasztalata is. Az elmúlt években közéleti megszólalásaival nemcsak széles látókörűségét, hanem kérlelhetetlenségét és felelősségtudatát is bizonyította. Magyarországnak pedig hatalmas szüksége van erre.\n\nÜdv a csapatban, Bálint!",
          "author_fullname": "t2_kxm2h9f0",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Újabb miniszterek, és Ruff Bálint pozició",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/hungary",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "red",
          "downs": 0,
          "thumbnail_height": 105,
          "top_awarded_type": null,
          "hide_score": true,
          "name": "t3_1ssglnn",
          "quarantine": false,
          "link_flair_text_color": "light",
          "upvote_ratio": 0.99,
          "author_flair_background_color": "transparent",
          "ups": 2723,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": "d2b6bf66-2e3d-11ed-bf89-129cb7e56f13",
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "POLITICS",
          "can_mod_post": false,
          "score": 2723,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/v3xpnee4ppwg1.jpeg?width=140&amp;height=105&amp;auto=webp&amp;s=60e0d331a1aa025c3c4e2ab50707f9e228986974",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776850609,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;Lőrincz Viktóriát, Kaposvár és térsége megválasztott országgyűlési képviselőjét kértem fel a megalakuló TISZA-kormány terület- és vidékfejlesztési miniszterének, a Miniszterelnökség vezetésével pedig Ruff Bálintot bízom meg.  &lt;/p&gt;\n\n&lt;p&gt;Dr. Lőrincz Viktória a Somogy 01-es választókerületben nyert egyéni országgyűlési képviselői mandátumot. A kampány során bebizonyította, hogy kérlelhetetlen, nagy tudású, emberséges és szorgalmas hazafi, akinek korábbi önkormányzati és jogi tapasztalatai sokat segítenek majd abban, hogy ezt a kiemelt jelentőségű minisztériumot méltóképpen vezethesse. Viktóriával egyetértünk abban, hogy megkülönböztetett figyelmet kell fordítani a vidéki Magyarország támogatására, a helyi közösségek megerősítésére és a területi egyenlőtlenségek csökkentésére.&lt;/p&gt;\n\n&lt;p&gt;Köszönöm dr. Ruff Bálintnak, hogy elfogadta a felkérésemet. Ő lesz a TISZA-kormányban a Miniszterelnökséget vezető miniszter. Az előtte és előttünk álló feladat egyszerűen, néhány szóban összefoglalható: a valódi rendszerváltás megvalósításáért felel és felelünk. Ruff Bálint nevét a magyar nyilvánosság elsősorban közéleti tevékenysége miatt ismeri, számomra kiemelten fontos emellett kiterjedt közigazgatási tapasztalata is. Az elmúlt években közéleti megszólalásaival nemcsak széles látókörűségét, hanem kérlelhetetlenségét és felelősségtudatát is bizonyította. Magyarországnak pedig hatalmas szüksége van erre.&lt;/p&gt;\n\n&lt;p&gt;Üdv a csapatban, Bálint!&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/v3xpnee4ppwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/v3xpnee4ppwg1.jpeg?auto=webp&amp;s=dc39147a5ca5b07cebdda1fe933deae334563e85",
                  "width": 960,
                  "height": 720
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/v3xpnee4ppwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=c0df16ebe1301f3ac47a1a560173507692a6ce0c",
                    "width": 108,
                    "height": 81
                  },
                  {
                    "url": "https://preview.redd.it/v3xpnee4ppwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=a60806b0a8da7e7497df0990c3a45dd8a2deaf92",
                    "width": 216,
                    "height": 162
                  },
                  {
                    "url": "https://preview.redd.it/v3xpnee4ppwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=fea1f99c679ef3ecbc7f2e17b823cd89cecb7d05",
                    "width": 320,
                    "height": 240
                  },
                  {
                    "url": "https://preview.redd.it/v3xpnee4ppwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=582ab8fa91a3027e00544830d9acee8ea0d7c186",
                    "width": 640,
                    "height": 480
                  },
                  {
                    "url": "https://preview.redd.it/v3xpnee4ppwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=569fa394c918f2602cff0317de9a91bc3c3b7888",
                    "width": 960,
                    "height": 720
                  }
                ],
                "variants": {

                },
                "id": "v3xpnee4ppwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "b64f9744-c231-11e2-a981-12313d1841d1",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": "az gatya",
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2qzzt",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#000000",
          "id": "1ssglnn",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "Acrobatic_Quiet_3706",
          "discussion_type": null,
          "num_comments": 542,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": "dark",
          "permalink": "/r/hungary/comments/1ssglnn/újabb_miniszterek_és_ruff_bálint_pozició/",
          "stickied": false,
          "url": "https://i.redd.it/v3xpnee4ppwg1.jpeg",
          "subreddit_subscribers": 702737,
          "created_utc": 1776850609,
          "num_crossposts": 2,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "Damnthatsinteresting",
          "selftext": "",
          "author_fullname": "t2_bil76tuzv",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "How to make a spiral tie-dye T-shirt",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/Damnthatsinteresting",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "video",
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss7n94",
          "quarantine": false,
          "link_flair_text_color": null,
          "upvote_ratio": 0.96,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 15469,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": {
            "reddit_video": {
              "bitrate_kbps": 5000,
              "fallback_url": "https://v.redd.it/ks7n40acdnwg1/CMAF_1080.mp4?source=fallback",
              "has_audio": true,
              "height": 1696,
              "width": 1080,
              "scrubber_media_url": "https://v.redd.it/ks7n40acdnwg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/ks7n40acdnwg1/DASHPlaylist.mpd?a=1779445358%2CNDcxYzJiOGVjMjg0ZmMxNWJkN2E4OTQyZGE3YzhiNmJmOTQ5OGM3NTVhYzcyZTcyNDBkZTdjNzVkZDBjZGJlMg%3D%3D&amp;v=1&amp;f=sd",
              "duration": 83,
              "hls_url": "https://v.redd.it/ks7n40acdnwg1/HLSPlaylist.m3u8?a=1779445358%2CYzBlZWM3OTU0ZGFiMjRkNDRkNzdlNGY4YzhlYTE2MmRmNjVhYzk1YTI1YjQ3MjAwMTFkMTc5OTAwMjc0MzQ0Mw%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Video",
          "can_mod_post": false,
          "score": 15469,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?width=140&amp;height=140&amp;crop=1:1,smart&amp;format=jpg&amp;auto=webp&amp;s=dd935b656cf9f915dd07f3c3b6818862cdee8f52",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "hosted:video",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776822474,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "v.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://v.redd.it/ks7n40acdnwg1",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?format=pjpg&amp;auto=webp&amp;s=d012211c676ddd8daece5351d2371a3b4377b3f9",
                  "width": 1284,
                  "height": 2016
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=867d2567f92cc21041c27889bffa325767699d52",
                    "width": 108,
                    "height": 169
                  },
                  {
                    "url": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=5db3b66641e441b0a36b3d1b3f1dfe86ebb697d2",
                    "width": 216,
                    "height": 339
                  },
                  {
                    "url": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=ff2e897b5f0fdc22eaf978a4b9f15cb9a028b75c",
                    "width": 320,
                    "height": 502
                  },
                  {
                    "url": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=7e280cc7f5bf852da697e940bce1bedf43398bd6",
                    "width": 640,
                    "height": 1004
                  },
                  {
                    "url": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?width=960&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=250b659220e16a08cb9308f26bf014b91cee71e3",
                    "width": 960,
                    "height": 1507
                  },
                  {
                    "url": "https://external-preview.redd.it/M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP.png?width=1080&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=050ea2b7d2b41a2b1175e3edda8258c62821c18b",
                    "width": 1080,
                    "height": 1695
                  }
                ],
                "variants": {

                },
                "id": "M3cwcmZvNGNkbndnMT4YSRloHNbuTGUptPAYaeOfSfqfkNd8UsTmHWvzRfZP"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2xxyj",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": null,
          "id": "1ss7n94",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "AccomplishedStuff235",
          "discussion_type": null,
          "num_comments": 240,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/Damnthatsinteresting/comments/1ss7n94/how_to_make_a_spiral_tiedye_tshirt/",
          "stickied": false,
          "url": "https://v.redd.it/ks7n40acdnwg1",
          "subreddit_subscribers": 20286655,
          "created_utc": 1776822474,
          "num_crossposts": 8,
          "media": {
            "reddit_video": {
              "bitrate_kbps": 5000,
              "fallback_url": "https://v.redd.it/ks7n40acdnwg1/CMAF_1080.mp4?source=fallback",
              "has_audio": true,
              "height": 1696,
              "width": 1080,
              "scrubber_media_url": "https://v.redd.it/ks7n40acdnwg1/CMAF_96.mp4",
              "dash_url": "https://v.redd.it/ks7n40acdnwg1/DASHPlaylist.mpd?a=1779445358%2CNDcxYzJiOGVjMjg0ZmMxNWJkN2E4OTQyZGE3YzhiNmJmOTQ5OGM3NTVhYzcyZTcyNDBkZTdjNzVkZDBjZGJlMg%3D%3D&amp;v=1&amp;f=sd",
              "duration": 83,
              "hls_url": "https://v.redd.it/ks7n40acdnwg1/HLSPlaylist.m3u8?a=1779445358%2CYzBlZWM3OTU0ZGFiMjRkNDRkNzdlNGY4YzhlYTE2MmRmNjVhYzk1YTI1YjQ3MjAwMTFkMTc5OTAwMjc0MzQ0Mw%3D%3D&amp;v=1&amp;f=sd",
              "is_gif": false,
              "transcoding_status": "completed"
            }
          },
          "is_video": true
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "politics",
          "selftext": "",
          "author_fullname": "t2_nkk56",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Virginia voters approve redistricting measure backed by Democrats",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "No Paywall"
            }
          ],
          "subreddit_name_prefixed": "r/politics",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 78,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss5vlc",
          "quarantine": false,
          "link_flair_text_color": null,
          "upvote_ratio": 0.98,
          "author_flair_background_color": null,
          "ups": 21772,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "No Paywall",
          "can_mod_post": false,
          "score": 21772,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?width=140&amp;height=78&amp;auto=webp&amp;s=6252fe57fc3abeaa6496c7668fbc59afaa2f1fab",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "link",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776817854,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "thehill.com",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://thehill.com/homenews/campaign/5839446-virginia-democrats-redistricting-plan-approved/",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?auto=webp&amp;s=561de1aa9c06881e5c41dd70773ff97703d51d40",
                  "width": 1280,
                  "height": 719
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=4853a1eab08a540511df1753940032ad0598ae7d",
                    "width": 108,
                    "height": 60
                  },
                  {
                    "url": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=c460b2c80cbe9f5171fea1496546a5c61ae7dbca",
                    "width": 216,
                    "height": 121
                  },
                  {
                    "url": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=0412eef76dccf9c2b2a9116de7ca2045a1feb530",
                    "width": 320,
                    "height": 179
                  },
                  {
                    "url": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=36675c1ff7ee669c8f8b86cb236924a66d3610bb",
                    "width": 640,
                    "height": 359
                  },
                  {
                    "url": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=26374941d7f1d82b0232925381c8a63bcfb89eec",
                    "width": 960,
                    "height": 539
                  },
                  {
                    "url": "https://external-preview.redd.it/TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=88c682c9428914d81af3caf57b46da78c274cfb1",
                    "width": 1080,
                    "height": 606
                  }
                ],
                "variants": {

                },
                "id": "TNRBYSOgfYkfwwmWpWwwL546cbrQez2FtMQmD_Ei4Ok"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "ff393144-9e39-11f0-acf2-f27090aab25c",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2cneq",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#34cb5c",
          "id": "1ss5vlc",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "progress18",
          "discussion_type": null,
          "num_comments": 1010,
          "send_replies": false,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/politics/comments/1ss5vlc/virginia_voters_approve_redistricting_measure/",
          "stickied": false,
          "url": "https://thehill.com/homenews/campaign/5839446-virginia-democrats-redistricting-plan-approved/",
          "subreddit_subscribers": 9129949,
          "created_utc": 1776817854,
          "num_crossposts": 13,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "worldnews",
          "selftext": "",
          "author_fullname": "t2_24d8g1sdob",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "UAE Warns US It Could Sell Oil in Chinese Yuan if War Drains Dollar Supplies, Triggering Biggest Threat to the Petrodollar Since the 1970s",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/worldnews",
          "hidden": false,
          "pwls": 7,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 78,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1sse88d",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.97,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 3728,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 3728,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?width=140&amp;height=78&amp;auto=webp&amp;s=69488a2bf646a7d9488d2c93ff7c76787bb77452",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "link",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776842294,
          "link_flair_type": "text",
          "wls": 7,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "defencesecurityasia.com",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://defencesecurityasia.com/en/uae-china-yuan-oil-sales-petrodollar-crisis-us-dollar-shortage-iran-war/",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?auto=webp&amp;s=74817ace45fde62235517e9c29ea0fae0748f724",
                  "width": 1500,
                  "height": 838
                },
                "resolutions": [
                  {
                    "url": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=ce24f308ccebddecb62588fa34587b24d07dabce",
                    "width": 108,
                    "height": 60
                  },
                  {
                    "url": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=ea62b09b30f68dec1caea2462594836190256ac3",
                    "width": 216,
                    "height": 120
                  },
                  {
                    "url": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=a95c0940bb3560de732e8923fb477a0599341cf6",
                    "width": 320,
                    "height": 178
                  },
                  {
                    "url": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=941e5006968135ec1bb47284056663d10f97114e",
                    "width": 640,
                    "height": 357
                  },
                  {
                    "url": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=9e2d4dc3a895f2f5396acef5a21efe9050609d7b",
                    "width": 960,
                    "height": 536
                  },
                  {
                    "url": "https://external-preview.redd.it/fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=019c60f094a89bd550134e1d5729f25edd42309a",
                    "width": 1080,
                    "height": 603
                  }
                ],
                "variants": {

                },
                "id": "fA39P9a7yICCDYi3IZNdWpBq0MhK-A5Cup0jaLAhtLY"
              }
            ],
            "enabled": false
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2qh13",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1sse88d",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "Kooolxxx",
          "discussion_type": null,
          "num_comments": 341,
          "send_replies": false,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/worldnews/comments/1sse88d/uae_warns_us_it_could_sell_oil_in_chinese_yuan_if/",
          "stickied": false,
          "url": "https://defencesecurityasia.com/en/uae-china-yuan-oil-sales-petrodollar-crisis-us-dollar-shortage-iran-war/",
          "subreddit_subscribers": 47281187,
          "created_utc": 1776842294,
          "num_crossposts": 4,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "cats",
          "selftext": "guess I posted this to the wrong sub, my fault",
          "author_fullname": "t2_246qrn8q5i",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "no cat here",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "Cat Picture - Not OC"
            }
          ],
          "subreddit_name_prefixed": "r/cats",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "",
          "downs": 0,
          "thumbnail_height": 138,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss6c9p",
          "quarantine": false,
          "link_flair_text_color": "light",
          "upvote_ratio": 0.98,
          "author_flair_background_color": null,
          "ups": 22835,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Cat Picture - Not OC",
          "can_mod_post": false,
          "score": 22835,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/olcolduc3nwg1.jpeg?width=140&amp;height=138&amp;auto=webp&amp;s=ed8429a7c75596172669b9d8be41ddad8842e8bc",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776819079,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;guess I posted this to the wrong sub, my fault&lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/olcolduc3nwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/olcolduc3nwg1.jpeg?auto=webp&amp;s=e7bf6042e1f267fa6a5562064772de4fa9b14f7f",
                  "width": 1080,
                  "height": 1066
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/olcolduc3nwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=673fd7699999e0c6f2de8ea931585d1ad4efb72f",
                    "width": 108,
                    "height": 106
                  },
                  {
                    "url": "https://preview.redd.it/olcolduc3nwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=78580d664d2ba81af8050073f3d7a77edb0c7912",
                    "width": 216,
                    "height": 213
                  },
                  {
                    "url": "https://preview.redd.it/olcolduc3nwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=d8f50ef8aa82fa9f1df40375cb25d3725ff001c6",
                    "width": 320,
                    "height": 315
                  },
                  {
                    "url": "https://preview.redd.it/olcolduc3nwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=05b14b377216887a04978294a42c22a03988e7b8",
                    "width": 640,
                    "height": 631
                  },
                  {
                    "url": "https://preview.redd.it/olcolduc3nwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=a860b98787362e5636be2095025c25b78eb43515",
                    "width": 960,
                    "height": 947
                  },
                  {
                    "url": "https://preview.redd.it/olcolduc3nwg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=af84efc051762fbcab43e3b1e0f7b0533e096904",
                    "width": 1080,
                    "height": 1066
                  }
                ],
                "variants": {

                },
                "id": "olcolduc3nwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "e0536502-7b70-11ef-8580-02096ea41c1e",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2qhta",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#cc5289",
          "id": "1ss6c9p",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "LunaLanter",
          "discussion_type": null,
          "num_comments": 180,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/cats/comments/1ss6c9p/no_cat_here/",
          "stickied": false,
          "url": "https://i.redd.it/olcolduc3nwg1.jpeg",
          "subreddit_subscribers": 9126653,
          "created_utc": 1776819079,
          "num_crossposts": 10,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "todayilearned",
          "selftext": "",
          "author_fullname": "t2_fh42apff3",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "TIL that pornography addiction is not a scientifically recognized medical condition",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/todayilearned",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": null,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1srpid4",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.91,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 18371,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": null,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": false,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 18371,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "default",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776782144,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "en.wikipedia.org",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://en.wikipedia.org/wiki/Pornography_addiction",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2qqjc",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1srpid4",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "MrMojoFomo",
          "discussion_type": null,
          "num_comments": 2515,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/todayilearned/comments/1srpid4/til_that_pornography_addiction_is_not_a/",
          "stickied": false,
          "url": "https://en.wikipedia.org/wiki/Pornography_addiction",
          "subreddit_subscribers": 41363682,
          "created_utc": 1776782144,
          "num_crossposts": 6,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "whatisit",
          "selftext": "it sounds like there's something inside when i shake it anyone knows what it is? looks kinda creepy ",
          "author_fullname": "t2_mkumuomt",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "found this in my brothers bag, what is it ?",
          "link_flair_richtext": [
            {
              "e": "text",
              "t": "Solved!"
            }
          ],
          "subreddit_name_prefixed": "r/whatisit",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1srvulh",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.94,
          "author_flair_background_color": null,
          "ups": 6619,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": "Solved!",
          "can_mod_post": false,
          "score": 6619,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/hn1voi014lwg1.jpeg?width=140&amp;height=140&amp;crop=1:1,smart&amp;auto=webp&amp;s=c82c16bfdb62059fbe724084f6dbb979d43a8a1d",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776795087,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;it sounds like there&amp;#39;s something inside when i shake it anyone knows what it is? looks kinda creepy &lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": "qa",
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/hn1voi014lwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/hn1voi014lwg1.jpeg?auto=webp&amp;s=c4d7a6acc48874f3c910cf5c63832cfa8a0b120e",
                  "width": 3024,
                  "height": 4032
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/hn1voi014lwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=3526a5ea0a7083fe06049ecd149cdda8b753817a",
                    "width": 108,
                    "height": 144
                  },
                  {
                    "url": "https://preview.redd.it/hn1voi014lwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=99f978982449c8de2b9b1a6b167da390935a2c1d",
                    "width": 216,
                    "height": 288
                  },
                  {
                    "url": "https://preview.redd.it/hn1voi014lwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=317dfff4d09dfe09c159de03a66a7c47d03727ed",
                    "width": 320,
                    "height": 426
                  },
                  {
                    "url": "https://preview.redd.it/hn1voi014lwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=499769eba3905da2184b0f5f25526725ea4099f2",
                    "width": 640,
                    "height": 853
                  },
                  {
                    "url": "https://preview.redd.it/hn1voi014lwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=0db27406514659a69fdbe582ba38efcddc4ccf4e",
                    "width": 960,
                    "height": 1280
                  },
                  {
                    "url": "https://preview.redd.it/hn1voi014lwg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=7833d75f7725a1ca7f126b8404df1dd1454b3a09",
                    "width": 1080,
                    "height": 1440
                  }
                ],
                "variants": {

                },
                "id": "hn1voi014lwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "39d42978-fa66-11e8-ab53-0e9e21eb3a00",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2r397",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#3ad22d",
          "id": "1srvulh",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "Slight-Fee-6520",
          "discussion_type": null,
          "num_comments": 2009,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/whatisit/comments/1srvulh/found_this_in_my_brothers_bag_what_is_it/",
          "stickied": false,
          "url": "https://i.redd.it/hn1voi014lwg1.jpeg",
          "subreddit_subscribers": 2155787,
          "created_utc": 1776795087,
          "num_crossposts": 4,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "MemePiece",
          "selftext": "And most satisfying, for the guy who said luffy d monkey ",
          "author_fullname": "t2_h3v27wxb",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "This might be the most hilarious ratio I've ever seen",
          "link_flair_richtext": [
            {
              "a": ":snoo_smile:",
              "e": "emoji",
              "u": "https://emoji.redditmedia.com/fh0615maaezz_t5_3nqvj/snoo_smile"
            },
            {
              "e": "text",
              "t": " Discussion"
            }
          ],
          "subreddit_name_prefixed": "r/MemePiece",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": "",
          "downs": 0,
          "thumbnail_height": 140,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ssa119",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.98,
          "author_flair_background_color": "#a851ff",
          "ups": 8973,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": "e5015002-c935-11ee-ad5c-fa692c851c20",
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": ":snoo_smile: Discussion",
          "can_mod_post": false,
          "score": 8973,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?width=140&amp;height=140&amp;crop=1:1,smart&amp;auto=webp&amp;s=f5c8648f26d63081f96313142a3433fd6f7f23aa",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [
            {
              "a": ":Luffy:",
              "e": "emoji",
              "u": "https://emoji.redditmedia.com/0avzzd8c10ic1_t5_2tt3v/Luffy"
            },
            {
              "e": "text",
              "t": " Eyeing a Large Banquet"
            }
          ],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "subreddit_type": "public",
          "created": 1776828958,
          "link_flair_type": "richtext",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "richtext",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": "&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;&lt;p&gt;And most satisfying, for the guy who said luffy d monkey &lt;/p&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;",
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/ex6lz7mqwnwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?auto=webp&amp;s=31a9b36699c6715f9184dccb15bc4c6904a63b8d",
                  "width": 1320,
                  "height": 1778
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=07997c069cbcc31cfdfff0988af8ba3b4132957d",
                    "width": 108,
                    "height": 145
                  },
                  {
                    "url": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=89f80fe67eb31f41845c5a14903e2e10398f6d73",
                    "width": 216,
                    "height": 290
                  },
                  {
                    "url": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=aad4506e12f99a4bdf5e207b34e13d73827be29f",
                    "width": 320,
                    "height": 431
                  },
                  {
                    "url": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=df3dd1cc58a946e59878d247915c4c0517d321a0",
                    "width": 640,
                    "height": 862
                  },
                  {
                    "url": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=d7937c9a34452b03723d9c9f408197f8263e1240",
                    "width": 960,
                    "height": 1293
                  },
                  {
                    "url": "https://preview.redd.it/ex6lz7mqwnwg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=be504c84a1c62e48b63497fa9a241b2b83f53fd2",
                    "width": 1080,
                    "height": 1454
                  }
                ],
                "variants": {

                },
                "id": "ex6lz7mqwnwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "link_flair_template_id": "4fb40b76-9c9d-11e9-b61a-0e9f3ecd3aaa",
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": ":Luffy: Eyeing a Large Banquet",
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "mod_note": null,
          "distinguished": null,
          "subreddit_id": "t5_2tt3v",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "num_reports": null,
          "removal_reason": null,
          "link_flair_background_color": "#bbbdbf",
          "id": "1ssa119",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "lavmuk",
          "discussion_type": null,
          "num_comments": 253,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": "dark",
          "permalink": "/r/MemePiece/comments/1ssa119/this_might_be_the_most_hilarious_ratio_ive_ever/",
          "stickied": false,
          "url": "https://i.redd.it/ex6lz7mqwnwg1.jpeg",
          "subreddit_subscribers": 821065,
          "created_utc": 1776828958,
          "num_crossposts": 5,
          "media": null,
          "is_video": false
        }
      },
      {
        "kind": "t3",
        "data": {
          "approved_at_utc": null,
          "subreddit": "okbuddycinephile",
          "selftext": "",
          "author_fullname": "t2_zqyq9",
          "saved": false,
          "mod_reason_title": null,
          "gilded": 0,
          "clicked": false,
          "title": "Movies where all the actors are canceled",
          "link_flair_richtext": [],
          "subreddit_name_prefixed": "r/okbuddycinephile",
          "hidden": false,
          "pwls": 6,
          "link_flair_css_class": null,
          "downs": 0,
          "thumbnail_height": 137,
          "top_awarded_type": null,
          "hide_score": false,
          "name": "t3_1ss85rp",
          "quarantine": false,
          "link_flair_text_color": "dark",
          "upvote_ratio": 0.96,
          "author_flair_background_color": null,
          "subreddit_type": "public",
          "ups": 10857,
          "total_awards_received": 0,
          "media_embed": {

          },
          "thumbnail_width": 140,
          "author_flair_template_id": null,
          "is_original_content": false,
          "user_reports": [],
          "secure_media": null,
          "is_reddit_media_domain": true,
          "is_meta": false,
          "category": null,
          "secure_media_embed": {

          },
          "link_flair_text": null,
          "can_mod_post": false,
          "score": 10857,
          "approved_by": null,
          "is_created_from_ads_ui": false,
          "author_premium": false,
          "thumbnail": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?width=140&amp;height=137&amp;auto=webp&amp;s=a9725133c9e7eed4d6ca41b92727e5e0d2807067",
          "edited": false,
          "author_flair_css_class": null,
          "author_flair_richtext": [],
          "gildings": {

          },
          "post_hint": "image",
          "content_categories": null,
          "is_self": false,
          "mod_note": null,
          "created": 1776823842,
          "link_flair_type": "text",
          "wls": 6,
          "removed_by_category": null,
          "banned_by": null,
          "author_flair_type": "text",
          "domain": "i.redd.it",
          "allow_live_comments": false,
          "selftext_html": null,
          "likes": null,
          "suggested_sort": null,
          "banned_at_utc": null,
          "url_overridden_by_dest": "https://i.redd.it/vlmwyrzihnwg1.jpeg",
          "view_count": null,
          "archived": false,
          "no_follow": false,
          "is_crosspostable": true,
          "pinned": false,
          "over_18": false,
          "preview": {
            "images": [
              {
                "source": {
                  "url": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?auto=webp&amp;s=f38ccdad7ff59497aa77f961249d2aee56976491",
                  "width": 2512,
                  "height": 2468
                },
                "resolutions": [
                  {
                    "url": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?width=108&amp;crop=smart&amp;auto=webp&amp;s=2f5a4f76aff678518969258653003fc541c530d7",
                    "width": 108,
                    "height": 106
                  },
                  {
                    "url": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?width=216&amp;crop=smart&amp;auto=webp&amp;s=583b4abea6914e15be71d147f7176c036a2f0149",
                    "width": 216,
                    "height": 212
                  },
                  {
                    "url": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?width=320&amp;crop=smart&amp;auto=webp&amp;s=2e7686113cc05e4e641478ef8efedb43d1fd1a8e",
                    "width": 320,
                    "height": 314
                  },
                  {
                    "url": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?width=640&amp;crop=smart&amp;auto=webp&amp;s=e1de3636d23ebee0a0b9a2fbc5b4b77c3d63b77b",
                    "width": 640,
                    "height": 628
                  },
                  {
                    "url": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?width=960&amp;crop=smart&amp;auto=webp&amp;s=a875c89fd261a2dcbe9e3c7d7c907eaa2fed6684",
                    "width": 960,
                    "height": 943
                  },
                  {
                    "url": "https://preview.redd.it/vlmwyrzihnwg1.jpeg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=a50200a58ddfb65c3ee63b0eb1ee2c9aa34fc4ab",
                    "width": 1080,
                    "height": 1061
                  }
                ],
                "variants": {

                },
                "id": "vlmwyrzihnwg1"
              }
            ],
            "enabled": true
          },
          "all_awardings": [],
          "awarders": [],
          "media_only": false,
          "can_gild": false,
          "spoiler": false,
          "locked": false,
          "author_flair_text": null,
          "treatment_tags": [],
          "visited": false,
          "removed_by": null,
          "num_reports": null,
          "distinguished": null,
          "subreddit_id": "t5_2gpmw9",
          "author_is_blocked": false,
          "mod_reason_by": null,
          "removal_reason": null,
          "link_flair_background_color": "",
          "id": "1ss85rp",
          "is_robot_indexable": true,
          "report_reasons": null,
          "author": "IEATTURANTULAS",
          "discussion_type": null,
          "num_comments": 1137,
          "send_replies": true,
          "contest_mode": false,
          "mod_reports": [],
          "author_patreon_flair": false,
          "author_flair_text_color": null,
          "permalink": "/r/okbuddycinephile/comments/1ss85rp/movies_where_all_the_actors_are_canceled/",
          "stickied": false,
          "url": "https://i.redd.it/vlmwyrzihnwg1.jpeg",
          "subreddit_subscribers": 648917,
          "created_utc": 1776823842,
          "num_crossposts": 6,
          "media": null,
          "is_video": false
        }
      }
    ],
    "before": null
  }
}