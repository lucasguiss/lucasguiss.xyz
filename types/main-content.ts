export type MainContent = "home" | "about"

export type ComponentMapper = {
    [k in MainContent]: Component
}