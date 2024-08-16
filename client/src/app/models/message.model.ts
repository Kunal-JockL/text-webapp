export interface Message{
    content: string,
    sender: string,
    timestamp: Date,
    type: 'text' | 'image' | 'gif';
}