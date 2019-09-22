// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: 'm1lEZSUX9GEiCl4LMqoEWmo2Ay6pCyXb',
        client_secret: 'A825e2f745a2649a',
        callback_url: process.env
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};
