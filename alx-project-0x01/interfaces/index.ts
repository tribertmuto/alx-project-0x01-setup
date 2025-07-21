// Post used for rendering cards
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  // Post structure for form inputs (id is optional)
  export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
  
  // Props accepted by PostModal
  export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
  }
  