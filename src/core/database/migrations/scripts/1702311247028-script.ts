import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {

await queryRunner.query(
      `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f917b824-5353-48db-81e4-2d513a43b4ba', '7Akeem.Gerhold34@yahoo.com', 'Persian', 'https://i.imgur.com/YfJQV5z.png', 'Ocicat', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('0055fb77-9e7e-4f8c-a300-51d1ebd70c4c', '13Nina48@yahoo.com', 'LaPerm', 'https://i.imgur.com/YfJQV5z.png', 'Abyssinian', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('8d1f8578-d5c2-43a8-86dc-2d36d427cc7d', '19Aracely_Langworth@gmail.com', 'Exotic Shorthair', 'https://i.imgur.com/YfJQV5z.png', 'Devon Rex', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('f915de32-7ce3-4a6c-bb65-9a75145f4da1', '25Alba_Schinner84@hotmail.com', 'Somali', 'https://i.imgur.com/YfJQV5z.png', 'Burmese', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('44c71bba-c411-4888-8e81-2bde09e7f595', '31Roberto_Kuphal@gmail.com', 'Scottish Fold', 'https://i.imgur.com/YfJQV5z.png', 'Cornish Rex', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('ed08d222-d5b3-4431-982a-e8f2841445fc', '37Philip_Murray17@hotmail.com', 'British Shorthair', 'https://i.imgur.com/YfJQV5z.png', 'Chartreux', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('081279ec-f057-43ee-b188-026f7a137a3a', '43Timmy.Crist49@hotmail.com', 'Havana', 'https://i.imgur.com/YfJQV5z.png', 'Chartreux', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('60d8c7b2-882d-4c8c-97c4-61ff132e5793', '49Felicita.Jast0@hotmail.com', 'Bengal', 'https://i.imgur.com/YfJQV5z.png', 'Munchkin', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('974e052b-3c84-4376-a1ed-ed196ce7bbfc', '55Lane11@hotmail.com', 'American Curl', 'https://i.imgur.com/YfJQV5z.png', 'Pixiebob', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('823e36a2-e173-4e28-9c97-ee72a66e963f', 'Pixiebob', 'Minskin', 'Ojos Azules', '64Fleta71@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '44c71bba-c411-4888-8e81-2bde09e7f595');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('eb1d0032-3de6-4ff4-871e-3e057ce28d7b', 'Burmese', 'American Curl', 'Egyptian Mau', '71Ambrose_Jaskolski88@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '60d8c7b2-882d-4c8c-97c4-61ff132e5793');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('105dfac7-4bc4-40bc-8f6b-95af87f0575a', 'Balinese', 'Chartreux', 'Balinese', '78Erna14@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '0055fb77-9e7e-4f8c-a300-51d1ebd70c4c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a14429d0-b2c4-47b3-8639-b625fd25e305', 'Cornish Rex', 'Bombay', 'Turkish Van', '85Shana_Klein@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', 'f917b824-5353-48db-81e4-2d513a43b4ba');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d6fcd8fd-08a3-4fa7-a71a-29646c9affb0', 'Siamese', 'Ocicat', 'Manx', '92Kassandra.Jaskolski76@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '60d8c7b2-882d-4c8c-97c4-61ff132e5793');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('46784af9-af97-4019-85d0-8a92a28f1cb9', 'Ocicat', 'American Curl', 'Chartreux', '99Icie_Douglas57@yahoo.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '974e052b-3c84-4376-a1ed-ed196ce7bbfc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('6a86d8b4-3e98-4c15-bd99-04c2bed0e22d', 'Highlander', 'Chausie', 'Kurilian Bobtail', '106Maud_Runte25@yahoo.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('f6c70cdf-dba2-43ad-9996-bf25a11433ce', 'Chartreux', 'Havana', 'Minskin', '113Mina_Becker16@hotmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1509c5b1-034b-4437-8537-03181b56385f', 'Selkirk Rex', 'Selkirk Rex', 'American Wirehair', '120Keyshawn_Stanton60@gmail.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '8d1f8578-d5c2-43a8-86dc-2d36d427cc7d');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('40bfa8e3-2ab9-4ebd-9bed-e6fbff4ebb44', 'Egyptian Mau', 'Oriental', 'Sokoke', '127Josue.Bergnaum40@yahoo.com', 'https://i.imgur.com/YfJQV5z.png', 'https://i.imgur.com/YfJQV5z.png', '0055fb77-9e7e-4f8c-a300-51d1ebd70c4c');

INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('f9f87c06-0b2c-4a1b-828f-723450af9a85', 'Exotic Shorthair', 'Maine Coon', 86715, 'f917b824-5353-48db-81e4-2d513a43b4ba');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('b05dcf82-759d-4faa-ac75-d682a08b60a3', 'Peterbald', 'Ragdoll', 42243, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('ed681da3-4272-47e8-be0e-458d62bab28d', 'Balinese', 'American Shorthair', 64677, '081279ec-f057-43ee-b188-026f7a137a3a');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('baf3bd64-d90e-4f12-939a-87733c8cc451', 'Bengal', 'Peterbald', 45407, '0055fb77-9e7e-4f8c-a300-51d1ebd70c4c');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('97564808-2768-46d6-9e01-7326d29fefb6', 'Kurilian Bobtail', 'Ojos Azules', 98348, '8d1f8578-d5c2-43a8-86dc-2d36d427cc7d');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('ba10b5ff-d55e-4255-9a98-dfb03e84db71', 'Abyssinian', 'Burmese', 60038, '081279ec-f057-43ee-b188-026f7a137a3a');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('5f0b4cb7-155c-4058-8ed8-7b4a84d9f34e', 'Thai', 'Ocicat', 63148, 'ed08d222-d5b3-4431-982a-e8f2841445fc');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('e5fdb508-575a-44fd-9c54-88ce87f1785a', 'Bengal', 'Persian', 74989, '081279ec-f057-43ee-b188-026f7a137a3a');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('6f65352d-54ba-486e-b4e3-1dc823191edb', 'Norwegian Forest Cat', 'Selkirk Rex', 2179, '8d1f8578-d5c2-43a8-86dc-2d36d427cc7d');
INSERT INTO "goal" ("id", "title", "description", "year", "userId") VALUES ('e4ea80bd-53af-487f-88be-de536eba2b35', 'American Bobtail', 'Ragdoll', 54696, '974e052b-3c84-4376-a1ed-ed196ce7bbfc');

INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('c005e866-6228-41a4-8b83-222656c1efad', 'Oriental', 'American Bobtail', 5686, 'f9f87c06-0b2c-4a1b-828f-723450af9a85');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('ea04ca50-dd87-42dd-ae4d-1bd56f6e1dce', 'Egyptian Mau', 'Havana', 53689, 'e4ea80bd-53af-487f-88be-de536eba2b35');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('203afab8-f2d2-47c6-8139-55f1f3d0e023', 'Manx', 'Siberian', 77721, 'baf3bd64-d90e-4f12-939a-87733c8cc451');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('26059922-507c-4900-a5ba-e2ae55c0e8e1', 'Persian', 'British Shorthair', 8949, '97564808-2768-46d6-9e01-7326d29fefb6');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('ddb17b1b-dcc5-4b12-936d-e5f991fcfb45', 'Turkish Van', 'Munchkin', 67836, '5f0b4cb7-155c-4058-8ed8-7b4a84d9f34e');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('5b21d184-928b-47d0-90c8-723816a121aa', 'Snowshoe', 'Egyptian Mau', 56113, 'ed681da3-4272-47e8-be0e-458d62bab28d');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('18543f95-3915-4a82-b857-f778c4f69f82', 'Savannah', 'Chausie', 30019, '5f0b4cb7-155c-4058-8ed8-7b4a84d9f34e');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('8798ab72-d493-4583-b131-30d3c5f74623', 'Norwegian Forest Cat', 'Norwegian Forest Cat', 33862, 'ed681da3-4272-47e8-be0e-458d62bab28d');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('f3250c14-06f8-414b-9f03-31f250f79e92', 'Himalayan', 'Birman', 83473, 'f9f87c06-0b2c-4a1b-828f-723450af9a85');
INSERT INTO "milestone" ("id", "title", "description", "quarter", "goalId") VALUES ('4a7ca1ba-1067-4d1c-a618-8b3802a6be59', 'Balinese', 'Birman', 83848, 'f9f87c06-0b2c-4a1b-828f-723450af9a85');

INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('8156d4c5-0d7d-4f21-be85-cf7f55329edc', '2023-06-16T02:15:59.778Z', 'Egyptian Mau', 'c005e866-6228-41a4-8b83-222656c1efad');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('010c8b2a-efdb-4288-8e01-b269c0a07aca', '2024-08-09T00:13:16.681Z', 'Donskoy', '26059922-507c-4900-a5ba-e2ae55c0e8e1');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('ee049878-b35c-4c82-97ba-4e3af4f3e998', '2023-12-30T11:32:56.529Z', 'Toyger', '8798ab72-d493-4583-b131-30d3c5f74623');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('ea50c9b6-bbd7-4b67-8202-afdaa0cc7050', '2023-11-17T04:51:18.059Z', 'British Shorthair', '5b21d184-928b-47d0-90c8-723816a121aa');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('d406efa9-b437-4bdb-9085-53764ef99587', '2024-03-01T22:12:41.335Z', 'Oriental', '26059922-507c-4900-a5ba-e2ae55c0e8e1');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('2108d500-089d-4378-b1a0-fef01b89ac4c', '2024-02-04T13:58:52.174Z', 'Savannah', 'c005e866-6228-41a4-8b83-222656c1efad');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('6af851ec-1e4f-4389-b634-21e8774fb6f2', '2024-03-28T13:59:25.116Z', 'Nebelung', '4a7ca1ba-1067-4d1c-a618-8b3802a6be59');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('993346bf-16bc-4b89-bf6f-a6b31fcbe355', '2024-04-07T18:22:01.937Z', 'American Wirehair', 'ddb17b1b-dcc5-4b12-936d-e5f991fcfb45');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('4b4f995e-1d42-45ed-97eb-92d0a4941884', '2024-08-28T03:46:14.989Z', 'Balinese', '26059922-507c-4900-a5ba-e2ae55c0e8e1');
INSERT INTO "progress" ("id", "progressDate", "note", "milestoneId") VALUES ('f9c02cd5-8f3b-45f5-b759-c10835862b1d', '2024-03-08T14:53:21.828Z', 'Oriental', 'f3250c14-06f8-414b-9f03-31f250f79e92');

INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('22fec9f2-e774-465d-82c8-58a75b882089', 'https://i.imgur.com/YfJQV5z.png', 'American Shorthair', 'e5fdb508-575a-44fd-9c54-88ce87f1785a');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('6f924478-17e6-4fb0-9538-b59f6fd9f9f6', 'https://i.imgur.com/YfJQV5z.png', 'Peterbald', 'baf3bd64-d90e-4f12-939a-87733c8cc451');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('353ce889-ab77-4b00-a86c-e95e200d4b25', 'https://i.imgur.com/YfJQV5z.png', 'Ojos Azules', 'f9f87c06-0b2c-4a1b-828f-723450af9a85');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('a3f893db-4c41-40ce-b6a6-daeecc76a68a', 'https://i.imgur.com/YfJQV5z.png', 'Sokoke', '5f0b4cb7-155c-4058-8ed8-7b4a84d9f34e');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('0768e58e-6d11-44c2-af1a-ae3cd2fab5ff', 'https://i.imgur.com/YfJQV5z.png', 'Tonkinese', 'ba10b5ff-d55e-4255-9a98-dfb03e84db71');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('a3ce1c57-3dff-4fda-b5d1-49769e7ef5e6', 'https://i.imgur.com/YfJQV5z.png', 'Devon Rex', 'e5fdb508-575a-44fd-9c54-88ce87f1785a');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('03bcd23f-22e6-4199-a295-bd81ee9d6672', 'https://i.imgur.com/YfJQV5z.png', 'British Shorthair', '6f65352d-54ba-486e-b4e3-1dc823191edb');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('2c9a78d3-161d-4eeb-84dd-208fafce3a76', 'https://i.imgur.com/YfJQV5z.png', 'Abyssinian', 'e4ea80bd-53af-487f-88be-de536eba2b35');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('d1a32479-8e17-4158-94c9-27e8409ded9c', 'https://i.imgur.com/YfJQV5z.png', 'Donskoy', 'ed681da3-4272-47e8-be0e-458d62bab28d');
INSERT INTO "resource" ("id", "url", "description", "goalId") VALUES ('a96ed45e-13cd-4741-820e-241f3ac03cbc', 'https://i.imgur.com/YfJQV5z.png', 'American Bobtail', '5f0b4cb7-155c-4058-8ed8-7b4a84d9f34e');
    `,
    )
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
