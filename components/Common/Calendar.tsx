import Cal from "@calcom/embed-react";
import { Modal } from '@mui/material'
import React from 'react'

export const Calendar = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  return (
    <Modal open={open} onClose={onClose}>
        <Cal
          namespace="15min"
          calLink="wesleytian/15-min-meeting"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{
            layout: "month_view"
          }}
        />
    </Modal>
  )
}
