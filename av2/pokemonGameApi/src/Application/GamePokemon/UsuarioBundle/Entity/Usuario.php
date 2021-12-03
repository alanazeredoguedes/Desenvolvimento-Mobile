<?php

namespace App\Application\GamePokemon\UsuarioBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Application\Sonata\MediaBundle\Entity\Gallery;
use App\Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\Common\Collections\ArrayCollection;


use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * Usuario
 *
 * @ORM\Table(name="usuario")
 * @ORM\Entity(repositoryClass="App\Application\GamePokemon\UsuarioBundle\Repository\UsuarioRepository")
 * @UniqueEntity(fields={"nick"}) 
 * @UniqueEntity(fields={"email"}) 

 */

class Usuario
{
    /**
     * @var int  
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     *
     * @ORM\Column(name="nick", type="string", unique=true)
     */
    private $nick;

    /**
     *
     * @ORM\Column(name="email", type="string", unique=true, nullable=true)
     */
    private $email;

    /**
     *
     * @ORM\Column(name="senha", type="string")
     */
    private $senha;
    
    public function __construct() {
        
    }

    /**
     * One Customer has One Cart.
     * @ORM\OneToOne(targetEntity="App\Application\GamePokemon\RankingBundle\Entity\Ranking", mappedBy="usuario")
     */
    private $ranking;

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getStringId(): ?String
    {
        return (String) $this->id;
    }
    
   
    public function getNick()
    {
        return $this->nick;
    }
    
    public function setNick($nick): void
    {
        $this->nick = $nick;
    }
    
   
    public function getEmail()
    {
        return $this->email;
    }
    
    public function setEmail($email): void
    {
        $this->email = $email;
    }
    
   
    public function getSenha()
    {
        return $this->senha;
    }
    
    public function setSenha($senha): void
    {
        $this->senha = $senha;
    }

    public function getRanking()
    {
        return $this->ranking;
    }

    public function setRanking($ranking): void
    {
        $this->ranking = $ranking;
    }

    }
