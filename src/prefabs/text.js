(() => ({
  name: 'Text Component',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'text',
      options: [
        {
          type: 'TOGGLE',
          label: 'Toggle Visibility',
          key: 'visible',
          value: true,
          configuration: {
              as: 'VISIBILITY',
          },
        },
          {
            type: 'TEXT',
            label: 'Content',
            key: 'content',
            value: 'Hello, World!',
          },
      ],
      descendants: [],
    },
  ],
}))();