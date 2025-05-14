'use client';
import { t } from '@lingui/core/macro';
import { Modal } from 'antd';
import Image from 'next/image';

import { Envelope, Location, Operator } from '@/assets/images/global/pages/partners';
import { ModalState } from '@/components/global/sections/partnership/contact';

const ContactModal = ({ isModalOpen, setIsModalOpen }: { isModalOpen: ModalState; setIsModalOpen: (v: ModalState) => void }) => {
  const isMobile = window.innerWidth < 768;

  const info = [
    { id: 1, icon: Operator, label: t`Phone number`, value: isModalOpen?.phone },
    { id: 2, icon: Location, label: t`Address`, value: isModalOpen?.location },
    { id: 3, icon: Envelope, label: t`Email address`, value: isModalOpen?.email },
  ];

  return (
    <>
      <Modal
        open={!isEmptyObject(isModalOpen)}
        footer={false}
        closable
        // closeIcon={<CloseIcon />}
        width={isMobile ? '90%' : 1000}
        className="rounded-3xl"
        styles={{ content: { borderRadius: 16, padding: 30 } }}
        centered
        onCancel={() => setIsModalOpen({})}
      >
        {isModalOpen.title && (
          <h3 className="font-global mb-7 text-center text-xl font-semibold text-black-2 md:text-3xl">{isModalOpen.title}</h3>
        )}
        <div className="flex h-full flex-col items-center justify-center gap-6 md:flex-row md:items-start">
          {info?.map((v) => (
            <div key={v.id} className="font-global flex h-full shrink-0 basis-[33%] flex-col text-center md:gap-2">
              <Image src={v.icon} alt="" className="mx-auto h-[70px] w-[70px] md:h-[100px] md:w-[100px]" />
              <p className="text-lg font-light text-black-2 md:text-lg">{v.label}:</p>
              {v.value && <h2 className="text-md font-medium text-black-2 md:text-lg">{v.value}</h2>}
            </div>
          ))}
          {/*<div className="flex h-full shrink-0 basis-1/2 flex-col gap-2 text-center">*/}
          {/*  <Operator className="mx-auto" />*/}
          {/*  <p className="text-lg font-light text-black-2">{t`Contact number`}</p>*/}
          {/*  {isModalOpen.phone && <h2 className="text-2xl font-medium text-black-2">{isModalOpen?.phone}</h2>}*/}
          {/*</div>*/}
          {/*<div className="flex h-full flex-col gap-2 text-center">*/}
          {/*  <Envelope className="mx-auto" />*/}
          {/*  <p className="text-lg font-light text-black-2">{t`E-mail address`}</p>*/}
          {/*  {isModalOpen?.email && <h2 className="text-2xl font-medium text-black-2">{isModalOpen?.email}</h2>}*/}
          {/*</div>*/}
        </div>
      </Modal>
    </>
  );
};

function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export default ContactModal;
