(() => ({
    name: "calendar",
    type: "BODY_COMPONENT",
    allowedTypes: [],
    orientation: "HORIZONTAL",
    jsx: (() => {
        const FullCalendar = window.FullCalendar;
        const interactionPlugin = window.interactionPlugin;
        const dayGridPlugin = window.dayGridPlugin;
        const timeGridPlugin = window.timeGridPlugin;
        const listPlugin = window.listPlugin;
        return (
            <div style={{ padding: "30px", backgroundColor: "#fff" }}>
                <FullCalendar
                    className={classes.calendar}
                    plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin]}
                    initialView="dayGridMonth"
                    displayEventTime={true}
                    height="80vh"
                    headerToolbar={{
                        left: "today prev,next",
                        center: "title",
                        right: ""
                    }}
                    navLinks={true}
                    nowIndicator={true}
                    selectable={true}
                    editable={true}
                    droppable={true}>
                </FullCalendar>
            </div>
        )
    })(),
    styles: () => () => ({
        calendar: {
          height: '80vh',
          maxWidth: '900px',
          margin: '0 auto',
        },
      }),
}))();