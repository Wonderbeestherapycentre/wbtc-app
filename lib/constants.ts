export const ITEMS_PER_PAGE = 20;

// Prompt options for session note activities
// export const PROMPT_OPTIONS = [
//     {
//         key: "independent",
//         value: "Independent",
//         desc: "Child completes the task without any help",
//     },
//     {
//         key: "verbal_prompt",
//         value: "Verbal Prompt",
//         desc: "Spoken instruction, no physical support",
//     },
//     {
//         key: "gestural_prompt",
//         value: "Gestural Prompt",
//         desc: "Pointing, showing, modeling; visual cue without touch",
//     },
//     {
//         key: "modeling",
//         value: "Modeling",
//         desc: "Therapist demonstrates the task; child imitates",
//     },
//     {
//         key: "partial_physical_prompt",
//         value: "Partial Physical Prompt",
//         desc: "Light touch or guiding part of movement",
//     },
//     {
//         key: "full_physical_prompt",
//         value: "Full Physical Prompt",
//         desc: "Hand-over-hand assistance; maximum support",
//     },
//     {
//         key: "repeated_prompt",
//         value: "Repeated Prompt",
//         desc: "Same instruction repeated multiple times",
//     },
//     {
//         key: "time_delay",
//         value: "Time Delay",
//         desc: "Wait time before giving prompt – 3 to 10 seconds",
//     },
//     {
//         key: "visual_prompt",
//         value: "Visual Prompt",
//         desc: "Picture cards, visual schedules, PECS",
//     },
// ];

export const PROMPT_OPTIONS = [
    {
        key: "independent",
        value: "Independent",
        desc: "Child completes the task without any help",
        score: 100,
        color: "green", // mastery
    },
    {
        key: "verbal_prompt",
        value: "Verbal Prompt",
        desc: "Spoken instruction, no physical support",
        score: 85,
        color: "emerald",
    },
    {
        key: "gestural_prompt",
        value: "Gestural Prompt",
        desc: "Pointing, showing, modeling; visual cue without touch",
        score: 80,
        color: "lime",
    },
    {
        key: "visual_prompt",
        value: "Visual Prompt",
        desc: "Picture cards, visual schedules, PECS",
        score: 75,
        color: "teal",
    },
    {
        key: "time_delay",
        value: "Time Delay",
        desc: "Wait time before giving prompt – 3 to 10 seconds",
        score: 70,
        color: "cyan",
    },
    {
        key: "modeling",
        value: "Modeling",
        desc: "Therapist demonstrates the task; child imitates",
        score: 65,
        color: "yellow",
    },
    {
        key: "partial_physical_prompt",
        value: "Partial Physical Prompt",
        desc: "Light touch or guiding part of movement",
        score: 40,
        color: "orange",
    },
    {
        key: "full_physical_prompt",
        value: "Full Physical Prompt",
        desc: "Hand-over-hand assistance; maximum support",
        score: 20,
        color: "red",
    },
    {
        key: "repeated_prompt",
        value: "Repeated Prompt",
        desc: "Same instruction repeated multiple times",
        score: 10,
        color: "rose",
    },
];
