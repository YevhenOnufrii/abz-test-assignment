export const _data = {
  url: {
    users: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=100',
    positions: 'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
    token: 'https://frontend-test-assignment-api.abz.agency/api/v1/token',
    post: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
  },
  input: {
    userNameProps: {
      type: 'text',
      id: 'name',
      placeholder: 'Your name',
    },
    emailProps: { type: 'email', id: 'email', placeholder: 'Email' },
    phoneProps: {
      type: 'tel',
      id: 'phone',
      placeholder: 'Phone',
      label: '+38 (XXX) XXX - XX - XX',
    },
    uploadProps: {
      type: 'file',
      id: 'photo',
      placeholder: 'Upload your photo',
      accept: 'image/*',
    },
  },
}
