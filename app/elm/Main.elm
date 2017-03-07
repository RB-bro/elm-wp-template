module Main exposing (..)

import Html exposing (Html, div, text, program)


-- MODEL

type alias Model =
  String

init =
  ("Hello", Cmd.none)


-- MESSAGES

type Msg
  = NoOp



-- View

view model =
  div []
      [ text model]

update msg model =
  case msg of
    NoOp ->
      ( model, Cmd.none )

-- SUBSCRIPTIONS


subscriptions model = Sub.none


-- MAIN


main =
  program 
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }
