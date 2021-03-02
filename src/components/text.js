(() => ({
  name: 'text',
  type: 'BODY_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
      const { content, visible } = options;
      return visible ? <div className={classes.root}>{content}</div> : <></>;
  })(),
  styles: B => theme => {
    const style = new B.Styling(theme);
    return {
      root: {
          color: "#E9004C",
          backgroundColor: "black",
      },
    };
  },
}))();