import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';
import { useUserStore } from './userStore';

export const useChatStore = create((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isReceiverUserBlocked: false,
    changeChat: (chatId, user) => {

        const currentUser = useUserStore.getState().currentUser

        // CHECK IF CURRENT USER IS BLOCKED
        if (user.blocked.includes(currentUser.id)) {
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true,
                isReceiverUserBlocked: false,
            })
        }

        // CHECK IF RECEIVER IS BLOCKED
        else if (currentUser.blocked.includes(user.id)) {
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false,
                isReceiverUserBlocked: true,
            })
        }

        else {
            return set({
                chatId,
                user,
                isCurrentUserBlocked: false,
                isReceiverUserBlocked: false,
            })
        }

    },

    changeBlock: () => {
        set(state => ({ ...state, isReceiverUserBlocked: !state.isReceiverUserBlocked }))
    },

    resetChat: () => {
        set({
          chatId: null,
          user: null,
          isCurrentUserBlocked: false,
          isReceiverBlocked: false,
        });
      },

}))