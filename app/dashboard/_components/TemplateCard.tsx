import React, { useContext, useState } from 'react';
import { TEMPLATE } from './TemplateListSection';
import Image from 'next/image';
import Link from 'next/link';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'; // Import context
import UpgradeModal from './UpgradeModal'; // Import the UpgradeModal component

function TemplateCard(item: TEMPLATE) {
  const { totalUsage } = useContext(TotalUsageContext);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (totalUsage >= 13000) {
      e.preventDefault();  // Prevent navigation
      setIsUpgradeModalOpen(true);  // Open the upgrade modal
    }
  };

  return (
    <>
      {/* Template Card */}
      <Link href={'/dashboard/content/' + item?.slug} onClick={handleClick}>
        <div className="p-7 shadow-lg rounded-2xl border bg-slate-950 text-purple-200 flex flex-col gap-4 cursor-pointer hover:scale-105 transition-all">
          <div className="flex gap-4">
            <Image src={item.icon} alt="icon" width={40} height={40} />
            <h2 className="font-medium text-2xl">{item.name}</h2>
          </div>
          <p className="line-clamp-4">{item.desc}</p>
        </div>
      </Link>

      {/* Upgrade Modal */}
      <UpgradeModal isOpen={isUpgradeModalOpen} onClose={() => setIsUpgradeModalOpen(false)} />
    </>
  );
}

export default TemplateCard;
